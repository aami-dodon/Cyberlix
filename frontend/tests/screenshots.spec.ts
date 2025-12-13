import { test, expect, Page } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import leadershipContent from '../src/content/leadership.json';
import servicesContent from '../src/content/services.json';

// Helper to disable animations and scroll
async function preparePage(page: Page) {
    // Inject CSS to disable animations and transitions
    await page.addStyleTag({
        content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        transition-duration: 0s !important;
        animation-delay: 0s !important;
        transition-delay: 0s !important;
      }
    `
    });

    // Scroll to bottom and back to top to trigger any lazy loading
    await page.evaluate(async () => {
        await new Promise<void>((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    window.scrollTo(0, 0);
                    resolve();
                }
            }, 10);
        });
    });

    await page.waitForTimeout(500); // Stabilize
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(100);
}

test('capture e2e screenshots', async ({ page }, testInfo) => {
    const projectName = testInfo.project.name;
    const baseDir = path.join('screenshots', projectName);

    // Helper to ensure dir exists
    const ensureDir = (dir: string) => {
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    };
    ensureDir(baseDir);

    const takeScreenshot = async (name: string, fullPage = true) => {
        console.log(`Taking screenshot: ${name}`);
        await page.screenshot({ path: path.join(baseDir, name), fullPage });
    };

    // --- 1. Home Page & Sections ---
    console.log('Navigating to Home...');
    await page.goto('/', { waitUntil: 'networkidle' });
    await preparePage(page);
    await takeScreenshot('home-full.png');

    // Sections
    const sections = page.locator('main > *');
    const count = await sections.count();
    for (let i = 0; i < count; i++) {
        const section = sections.nth(i);
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(50);
        try {
            await section.screenshot({ path: path.join(baseDir, `home-section-${i + 1}.png`) });
        } catch (e) {
            console.warn(`Failed section ${i + 1}`, e);
        }
    }

    // --- 2. Leadership Profiles ---
    const leadershipDir = path.join(baseDir, 'leadership');
    ensureDir(leadershipDir);

    for (const leader of leadershipContent.leaders) {
        console.log(`Navigating to Leader: ${leader.name}`);
        await page.goto(`/leadership/${leader.slug}`, { waitUntil: 'networkidle' });
        await preparePage(page);
        await page.screenshot({ path: path.join(leadershipDir, `${leader.slug}.png`), fullPage: true });
    }

    // --- 3. Services ---
    const servicesDir = path.join(baseDir, 'services');
    ensureDir(servicesDir);

    // Main Services Page
    console.log('Navigating to Services Main...');
    await page.goto('/services', { waitUntil: 'networkidle' });
    await preparePage(page);
    await page.screenshot({ path: path.join(servicesDir, 'services-main.png'), fullPage: true });

    // Service Detail Pages
    for (const service of servicesContent.list) {
        console.log(`Navigating to Service: ${service.title}`);
        await page.goto(`/services/${service.slug}`, { waitUntil: 'networkidle' });
        await preparePage(page);
        await page.screenshot({ path: path.join(servicesDir, `${service.slug}.png`), fullPage: true });
    }

    // --- 4. Insights ---
    const insightsDir = path.join(baseDir, 'insights');
    ensureDir(insightsDir);

    // Main Insights Page
    console.log('Navigating to Insights Main...');
    await page.goto('/insights', { waitUntil: 'networkidle' });
    await preparePage(page);
    await page.screenshot({ path: path.join(insightsDir, 'insights-main.png'), fullPage: true });

    // Crawl for Insight Posts
    // We assume links to individual insights are present on the main insights page
    // They likely start with /insights/ and represent posts
    const insightLinks = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('a'));
        return anchors
            .map(a => a.getAttribute('href'))
            .filter(href => href && href.startsWith('/insights/') && href !== '/insights')
            .filter((v, i, a) => a.indexOf(v) === i); // unique
    });

    console.log(`Found ${insightLinks.length} insight posts.`);

    for (const link of insightLinks) {
        if (!link) continue;
        const slug = link.split('/').pop() || 'unknown';
        console.log(`Navigating to Insight: ${slug}`);
        await page.goto(link, { waitUntil: 'networkidle' });
        await preparePage(page);
        await page.screenshot({ path: path.join(insightsDir, `${slug}.png`), fullPage: true });
    }

});
