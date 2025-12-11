"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <article className="relative overflow-hidden bg-[var(--card)] p-10 text-[var(--foreground)]">
      <div className="space-y-6 pt-16">
        <p className="text-xs uppercase tracking-[0.5em] text-[var(--sidebar-foreground)]/70">
          Enterprise Cybersecurity Leadership
        </p>
        <h1 className="text-[clamp(2.5rem,4vw,4.25rem)] font-semibold leading-tight text-[var(--foreground)]">
          We Secure Your Cyber Presence
        </h1>
        <p className="max-w-3xl text-[clamp(1rem,1.2vw,1.15rem)] text-[var(--sidebar-foreground)]/90">
          Cynalitx provides end-to-end cybersecurity solutions — from strategy and governance to 24×7 threat
          monitoring, cloud security, data protection, and compliance.
        </p>
        <Button variant="default" size="lg" className="font-semibold">
          Book Consultation
        </Button>
      </div>
    </article>
  );
}
