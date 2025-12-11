import { chromium, devices } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { once } from "node:events";

const DEFAULT_BASE_URL = "http://127.0.0.1:4000";
const configuredUrl = process.env.CYNALITX_BASE_URL ?? DEFAULT_BASE_URL;
const baseUrl = new URL(configuredUrl);
const baseUrlString = baseUrl.toString();
const defaultUrl = new URL(DEFAULT_BASE_URL);
const canAutoStartDevServer =
  !process.env.CYNALITX_BASE_URL &&
  baseUrl.hostname === defaultUrl.hostname &&
  baseUrl.port === defaultUrl.port;
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const outputDir = path.resolve(process.cwd(), "../docs/screenshots");

const sections = [
  { name: "hero", locator: (page) => page.locator("article").first() },
  { name: "about", locator: (page) => page.locator("#about") },
  { name: "services", locator: (page) => page.locator("#services") },
  { name: "why-cynalitx", locator: (page) => page.locator("#why-cynalitx") },
  { name: "leadership", locator: (page) => page.locator("#leadership") },
  { name: "contact", locator: (page) => page.locator("#contact") },
];

const viewports = [
  {
    name: "desktop",
    contextOptions: {
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
    },
  },
  {
    name: "mobile",
    contextOptions: {
      ...devices["iPhone 14 Pro"],
    },
  },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function ensureOutputDir() {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function isServerAvailable() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    await fetch(baseUrl, { method: "HEAD", signal: controller.signal });
    return true;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

async function waitForServerReady(timeoutMs = 30000, intervalMs = 500) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    if (await isServerAvailable()) {
      return true;
    }
    await sleep(intervalMs);
  }

  return false;
}

async function ensureLocalServer() {
  if (await isServerAvailable()) {
    return null;
  }

  if (!canAutoStartDevServer) {
    throw new Error(`Unable to reach ${baseUrlString}. Start the site or set CYNALITX_BASE_URL.`);
  }

  console.log(`Starting Next dev server at ${baseUrlString}...`);
  const devProcess = spawn(npmCommand, ["run", "dev"], {
    env: { ...process.env, PORT: baseUrl.port || defaultUrl.port },
    stdio: "inherit",
  });

  const ready = await waitForServerReady(60000);
  if (!ready) {
    devProcess.kill("SIGINT");
    throw new Error("Dev server did not start within 60 seconds.");
  }

  return devProcess;
}

async function captureSectionScreenshots() {
  ensureOutputDir();
  const devServerProcess = await ensureLocalServer();
  const browser = await chromium.launch();

  try {
    for (const viewport of viewports) {
      const context = await browser.newContext(viewport.contextOptions);
      const page = await context.newPage();
      await page.goto(baseUrlString, { waitUntil: "networkidle" });
      await page.waitForTimeout(1200);

      for (const section of sections) {
        const locator = section.locator(page);
        await locator.waitFor({ state: "visible" });
        await locator.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);

        const screenshotPath = path.join(outputDir, `${section.name}-${viewport.name}.png`);
        await locator.screenshot({
          path: screenshotPath,
          animations: "disabled",
        });
        await page.waitForTimeout(150);
      }

      await context.close();
    }
  } finally {
    await browser.close();
    if (devServerProcess) {
      devServerProcess.kill("SIGINT");
      try {
        await once(devServerProcess, "exit");
      } catch {
        // ignore if process already exited
      }
    }
  }
}

captureSectionScreenshots().catch((error) => {
  console.error(error);
  process.exit(1);
});
