"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CynalitxLogo } from "@/components/ui/logo";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const legalLinks = ["Privacy", "Terms", "Security"];

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN, label: "LinkedIn" },
    { icon: Twitter, href: process.env.NEXT_PUBLIC_SOCIAL_TWITTER, label: "Twitter" },
    { icon: Facebook, href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK, label: "Facebook" },
    { icon: Instagram, href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM, label: "Instagram" },
  ].filter((link) => link.href);

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)]">
      <div className="layout-container grid gap-8 px-6 py-12 lg:grid-cols-[70%_30%] lg:gap-12">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <CynalitxLogo className="h-6 w-6" />
              <p className="text-lg font-semibold text-[var(--foreground)]">Cynalitx</p>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              We build resilient platforms and teams that keep mission critical systems calm, clear, and trusted.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Newsletter */}
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[var(--foreground)]">Newsletter</p>
            <p className="text-xs text-[var(--muted-foreground)]">
              Latest security insights and news.
            </p>
          </div>
          <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="email@domain.com"
              className="bg-[var(--background)] pr-12 h-10 border-[var(--border)] focus-visible:ring-[var(--primary)]"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-1 top-1 h-8 w-8 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Subscribe</span>
            </Button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[var(--border)] px-6 py-4 text-xs text-[var(--muted-foreground)]">
        <div className="layout-container flex flex-wrap items-center justify-between gap-3">
          <span>© {year} Cynalitx. All rights reserved.</span>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link}
                href="/coming-soon"
                className="text-[var(--sidebar-foreground)] hover:text-[var(--foreground)]"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
