"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = ["Home", "Services", "Why Cynalitx", "Leadership", "Resources"];

const MainNav = React.memo(function MainNav() {
  return (
    <NavigationMenu className="flex-1 justify-center">
      <NavigationMenuList className="flex gap-4">
        {navItems.map((item) => (
          <NavigationMenuItem key={item}>
            <NavigationMenuLink href="#" className="text-[var(--sidebar-foreground)]">
              {item}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
});

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [icon, setIcon] = useState<"sun" | "moon">("sun");

  useEffect(() => {
    setMounted(true);
    const activeTheme = resolvedTheme === "system" ? theme : resolvedTheme;
    const normalizedTheme = activeTheme ?? "light";
    setIcon(normalizedTheme === "dark" ? "sun" : "moon");
  }, [resolvedTheme, theme]);

  const isDark = icon === "sun";
  const targetTheme = isDark ? "light" : "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => setTheme(targetTheme)}
      aria-label="Toggle color theme"
      className="inline-flex items-center justify-center border-[var(--sidebar-border)] bg-[var(--sidebar)] px-3 py-2 text-[var(--sidebar-foreground)] transition hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-foreground)] dark:hover:text-[var(--sidebar-primary-foreground)]"
    >
      {icon === "sun" ? <Sun size={16} /> : <Moon size={16} />}
      <span className="sr-only">
        Toggle to {icon === "sun" ? "light" : "dark"} theme
      </span>
    </Button>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-[var(--foreground)] border-b ${
        isScrolled
          ? "bg-[var(--card)]/80 border-[var(--border)]/40 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="layout-container flex items-center justify-between gap-6 px-10 py-4">
        <span className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
          Cynalitx
        </span>
        <MainNav />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button className="text-[var(--sidebar-foreground)]" variant="default" size="sm">
            Book Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
