"use client";

import React, { useEffect, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import Link from "next/link";
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
} from "@/components/ui/sheet";

const navItems = [
  { name: "Services", href: "/#services" },
  { name: "Why Cyberlix", href: "/#why-cyberlix" },
  { name: "Leadership", href: "/#leadership" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/#contact" },
];

const MainNav = React.memo(function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex gap-1">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink
              asChild
              className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent"
            >
              <Link
                href={item.href}
                className="relative group inline-flex h-8 items-center justify-center px-4 text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                {item.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu >
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
          className="md:hidden text-foreground"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border bg-background/95 backdrop-blur-xl">
        <SheetHeader className="text-left border-b border-border pb-4 mb-4">
          <SheetTitle className="text-xl font-bold tracking-tight">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.name}
              <ArrowRight className="h-4 w-4 opacity-50" />
            </Link>
          ))}
        </nav>
        <SheetFooter className="absolute bottom-6 left-6 right-6">
          <Button
            asChild
            variant="glow"
            className="w-full rounded-full font-semibold transition-all duration-300"
            size="xl"
          >
            <Link href="/coming-soon">Live Demo</Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

import { CyberlixLogo } from "@/components/ui/logo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-colors duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <header className="layout-container flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 shrink-0">
          <CyberlixLogo className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight text-foreground transition-all">
            Cyberlix
          </span>
        </Link>

        {/* Centered Navigation (Desktop) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <MainNav />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="hidden md:flex items-center gap-2">
            <Button
              asChild
              variant="glow"
              className="rounded-full font-semibold transition-all duration-300"
              size="xl"
            >
              <Link href="/coming-soon">Live Demo</Link>
            </Button>
          </div>
          <MobileMenu />
        </div>
      </header>
    </div>
  );
}
