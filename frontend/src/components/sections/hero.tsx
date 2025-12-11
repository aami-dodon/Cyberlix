"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { cn } from "@/lib/utils";
import { sessionState } from "@/lib/session-store";
import homeContent from "@/content/home.json";

const heroContent = homeContent.hero;

export function HeroSection() {
  const shouldAnimate = !sessionState.hasVisitedHome;

  useEffect(() => {
    sessionState.hasVisitedHome = true;
  }, []);

  return (
    <article className="relative overflow-hidden bg-background text-foreground h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-[100px]" />
      </div>
      <BackgroundGrid />

      <div className="layout-container relative z-10 space-y-8 py-24">
        <div className="max-w-4xl space-y-6">
          <p
            className={cn(
              "inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary",
              shouldAnimate && "animate-in fade-in slide-in-from-bottom-4 duration-700"
            )}
          >
            {heroContent.eyebrow}
          </p>

          <h1
            className={cn(
              "text-[clamp(3rem,6vw,5.5rem)] font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary drop-shadow-sm",
              shouldAnimate && "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100"
            )}
          >
            {heroContent.title}
          </h1>

          <p
            className={cn(
              "max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground",
              shouldAnimate && "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"
            )}
          >
            {heroContent.description}
          </p>

          <div
            className={cn(
              "pt-4",
              shouldAnimate && "animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300"
            )}
          >
            <Button
              asChild
              variant="glow"
              size="lg"
              className="h-12 px-8 text-base font-semibold transition-all duration-300"
            >
              <a href={heroContent.cta.href}>{heroContent.cta.label}</a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
