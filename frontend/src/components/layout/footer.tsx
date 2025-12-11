"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CynalitxLogo } from "@/components/ui/logo";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
];

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN, label: "LinkedIn" },
    { icon: Twitter, href: process.env.NEXT_PUBLIC_SOCIAL_TWITTER, label: "Twitter" },
    { icon: Facebook, href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK, label: "Facebook" },
    { icon: Instagram, href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM, label: "Instagram" },
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
        <div className="flex flex-col gap-4">
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
            const originalIcon = button.innerHTML;
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
                // If using sonner or similar, we might need to import toast.
                // Since I cannot easily add imports at top with replace_file_content without context of imports block, 
                // I will use alert for fallback or try to import toast if possible, 
                // BUT better yet, I should use multi_replace to add the import too.
                // Assuming I will do multi_replace to add imports.
                // For now, I will just put the logic here.
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
              placeholder="email@domain.com"
              variant="glass"
              className="pr-12"
              required
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-1 top-1 h-8 w-8 bg-primary text-primary-foreground hover:bg-primary/90"
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
