"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sparkles, BookOpen, Terminal, Zap, Moon, Sun } from "lucide-react";

const highlights = [
  {
    name: "Design tokens",
    description:
      "Re-use the semantic colors and radii defined in globals.css to keep every surface in sync with the system theme.",
    icon: Sparkles,
  },
  {
    name: "Readable prose",
    description:
      "Tailwind Typography keeps content structured and legible with responsive spacing, headings, and link styles.",
    icon: BookOpen,
  },
  {
    name: "Developer velocity",
    description:
      "Lucid icons and utility-first classes let you assemble a high-fidelity layout without leaving the code editor.",
    icon: Zap,
  },
];

const stack = ["Tailwind CSS", "Tailwind Typography", "Lucide Icons", "Next.js 16"];

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const activeTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = activeTheme === "dark";
  const ButtonIcon = isDark ? Sun : Moon;
  const targetTheme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(targetTheme)}
      aria-label="Toggle color theme"
    className="inline-flex items-center gap-2 rounded-full border border-[var(--sidebar-border)] bg-[var(--sidebar)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--sidebar-foreground)] transition hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-foreground)] dark:hover:text-[var(--sidebar-primary-foreground)]"
    >
      <ButtonIcon size={16} />
      {isDark ? "Light" : "Dark"}
    </button>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-[var(--background)] px-6 py-12 text-[var(--foreground)]">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-10 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
        <header className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              <Sparkles size={18} />
              Design System Preview
            </p>
            <ThemeToggle />
          </div>
          <h1 className="text-4xl font-semibold">
            Tailwind Typography + shared tokens
          </h1>
          <p className="text-lg text-[var(--muted-foreground)]">
            Everything on this page references the CSS custom properties from{" "}
            <code className="rounded bg-[var(--sidebar)] px-1 py-0.5 text-xs font-semibold uppercase tracking-tight text-[var(--sidebar-foreground)]">
              globals.css
            </code>
            .
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-3 rounded-2xl border border-[var(--sidebar-border)] bg-[var(--sidebar)]/40 p-5"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--sidebar-accent)] text-[var(--sidebar-foreground)]">
                <item.icon size={20} />
              </div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-[var(--sidebar-foreground)]">{item.description}</p>
            </article>
          ))}
        </section>

        <article className="prose max-w-none text-[var(--foreground)] prose-invert">
          <h3 className="text-2xl font-semibold">Typography-first content</h3>
          <p>
            Leveraging Tailwind Typography means every heading, paragraph, list, and link receives sensible spacing.
            This keeps multi-column sections and callouts readable regardless of screen size.
          </p>
          <ul>
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Since the colors, radius, and spacing tokens live in one place, switching to a different theme only
            requires updating <code>globals.css</code>.
          </p>
        </article>

        <footer className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted-foreground)]">
          <Terminal size={16} />
          <span>Built with shared tokens and Lucide icons.</span>
        </footer>
      </main>
    </div>
  );
}
