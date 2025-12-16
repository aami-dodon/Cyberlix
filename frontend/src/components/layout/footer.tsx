"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CynalitxLogo } from "@/components/ui/logo";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

import { socials as socialData } from "@/content";

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
];

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: socialData.linkedIn, label: "LinkedIn" },
    { icon: Twitter, href: socialData.twitter, label: "Twitter" },
    { icon: Facebook, href: socialData.facebook, label: "Facebook" },
    { icon: Instagram, href: socialData.instagram, label: "Instagram" },
  ].filter((link) => link.href);

  return (

    <footer className="mt-auto border-t border-border bg-card text-muted-foreground">
      <div className="layout-container grid gap-8 px-6 py-12 lg:grid-cols-[70%_30%] lg:gap-12">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <CynalitxLogo className="h-6 w-6" />
              <p className="text-lg font-semibold text-foreground">Cynalitx</p>
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
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Newsletter */}
        <div className="flex flex-col gap-4 pr-8">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">Newsletter</p>
            <p className="text-xs text-muted-foreground">
              Latest security insights and news.
            </p>
          </div>
          <form className="relative max-w-sm" onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const input = form.elements.namedItem("email") as HTMLInputElement;
            const email = input.value;

            // simple valid check
            if (!email) return;

            const button = form.querySelector("button") as HTMLButtonElement;
            button.disabled = true;
            // optional: add loading spinner here or just opacity

            try {
              const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
              });
              const data = await res.json();

              if (res.ok && data.success) {
                toast.success("Subscribed successfully!");
                input.value = "";
              } else {
                toast.error(data.message || "Failed to subscribe");
              }
            } catch (err) {
              console.error(err);
              toast.error("Something went wrong. Please try again.");
            } finally {
              button.disabled = false;
            }
          }}>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              variant="glass"
              className="pr-12"
              required
            />
            <Button
              type="submit"
              size="icon-sm"
              className="absolute right-1 top-1 rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Subscribe</span>
            </Button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border px-6 py-4 text-xs text-muted-foreground">
        <div className="layout-container flex flex-wrap items-center justify-between gap-3">
          <span>© {year} Cynalitx. All rights reserved.</span>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sidebar-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
