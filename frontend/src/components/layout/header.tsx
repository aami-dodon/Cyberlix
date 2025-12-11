"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = ["Home", "Services", "Why Cynalitx", "Leadership", "Resources"];

const MainNav = React.memo(function MainNav() {
  return (
    <NavigationMenu className="hidden flex-1 justify-center md:flex">
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

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-[var(--sidebar-border)] bg-[var(--sidebar)] px-2 py-2 text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)] md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="md:hidden p-6">
        <SheetHeader>
          <SheetTitle className="text-lg">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="mt-2 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-md px-4 py-2 text-base font-medium text-[var(--foreground)] transition hover:bg-[var(--card)]/60"
            >
              {item}
            </a>
          ))}
        </nav>
        <SheetFooter>
          <Button className="w-full text-[var(--sidebar-foreground)]" size="sm">
            Book Consultation
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

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
      <div className="layout-container flex items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <span className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
          Cynalitx
        </span>
        <MainNav />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button className="text-[var(--sidebar-foreground)]" variant="default" size="sm">
            Book Consultation
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
