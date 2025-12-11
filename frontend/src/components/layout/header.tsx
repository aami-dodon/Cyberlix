"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
  SheetClose
} from "@/components/ui/sheet";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Cynalitx", href: "#why-cynalitx" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

const MainNav = React.memo(function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex gap-1">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink
              href={item.href}
              className="relative group inline-flex h-8 items-center justify-center px-4 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--primary)] focus:text-[var(--primary)] focus:outline-none disabled:pointer-events-none disabled:opacity-50 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[var(--primary)] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {item.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
});

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[var(--foreground)]"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl">
        <SheetHeader className="text-left border-b border-[var(--border)] pb-4 mb-4">
          <SheetTitle className="text-xl font-bold tracking-tight">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-md px-4 py-3 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
            >
              {item.name}
              <ArrowRight className="h-4 w-4 opacity-50" />
            </a>
          ))}
        </nav>
        <SheetFooter className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--card)]/50">
              <span className="text-sm font-medium">Switch Theme</span>
              <ThemeToggle />
            </div>
            <Button
              className="w-full rounded-full font-semibold shadow-[0_0_15px_-3px_var(--primary)] hover:shadow-[0_0_20px_-3px_var(--primary)] transition-all duration-300 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 border border-[var(--primary)]/50"
              size="default"
            >
              DEMO
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-9 w-9 rounded-full border border-[var(--border)/40] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

import { CynalitxLogo } from "@/components/ui/logo";

export function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 py-4">
      <header className="layout-container flex items-center justify-between relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-50 shrink-0">
          <CynalitxLogo className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight text-[var(--foreground)] transition-all">
            Cynalitx
          </span>
        </a>

        {/* Centered Navigation (Desktop) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <MainNav />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button
              className="rounded-full font-semibold shadow-[0_0_15px_-3px_var(--primary)] hover:shadow-[0_0_20px_-3px_var(--primary)] transition-all duration-300 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 border border-[var(--primary)]/50"
              size="default"
            >
              DEMO
            </Button>
          </div>
          <MobileMenu />
        </div>
      </header>
    </div>
  );
}
