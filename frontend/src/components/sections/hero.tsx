"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <article className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)] h-screen snap-start flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[var(--primary)]/20 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[var(--secondary)]/20 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" /> {/* Optional grid if available, otherwise just gradients */}
      </div>

      <div className="layout-container relative z-10 space-y-8 py-24">
        <div className="max-w-4xl space-y-6">
          <p className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)] animate-in fade-in slide-in-from-bottom-4 duration-700">
            Enterprise Cybersecurity Leadership
          </p>

          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[var(--primary)] drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            We Secure Your Cyber Presence
          </h1>

          <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-[var(--muted-foreground)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Cynalitx provides end-to-end cybersecurity solutions — from strategy and governance to 24×7 threat
            monitoring, cloud security, data protection, and compliance.
          </p>

          <div className="pt-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button
              variant="default"
              size="lg"
              className="h-12 px-8 text-base font-semibold shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 border border-[var(--primary)]/50"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
