import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { heroStats } from '@/lib/data';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="about" className="relative overflow-hidden pb-24 pt-14 md:pt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center">
        <div className="space-y-8 md:flex-1">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-accent/40 px-4 py-2 text-xs font-semibold text-primary shadow-glow">
            <Sparkles className="h-4 w-4" />
            <span>Cybersecurity + AI Governance</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Secure Your Digital Future with Intelligent Cyber & AI Governance
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Cynalitx unifies cybersecurity, GRC automation, and AI oversight into one powerful
              platform for a resilient and compliant enterprise.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link href="#contact" className="inline-flex items-center gap-2">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-muted/30 p-4 text-center text-sm text-muted-foreground shadow-card"
              >
                <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative md:flex-1">
          <div className="gradient-governance absolute inset-0 rounded-3xl opacity-90 blur-0" />
          <div className="relative space-y-4 rounded-3xl border border-border/60 bg-card/90 p-6 shadow-glow">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Unified Governance Graph</span>
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
                Live
              </span>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background p-4 shadow-inner">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Controls mapped</span>
                <span>AI Explainability</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm text-foreground">
                <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                  <p className="text-lg font-semibold">ISO 27001</p>
                  <p className="text-xs text-muted-foreground">92% coverage</p>
                </div>
                <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                  <p className="text-lg font-semibold">SOC2</p>
                  <p className="text-xs text-muted-foreground">Audit-ready</p>
                </div>
                <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                  <p className="text-lg font-semibold">EU AI Act</p>
                  <p className="text-xs text-muted-foreground">Proactive mapping</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-primary/40 bg-primary/10 p-4 text-left text-sm text-primary">
                <p className="font-semibold text-primary">CynaRisk Scoring</p>
                <p className="text-xs text-foreground">
                  Continuous scoring for cyber and AI risk with oversight signals.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-muted/30 p-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <div>
                <p className="text-foreground">Enterprise-grade encryption, zero-trust design</p>
                <p className="text-xs">
                  Built for BFSI, healthcare, SaaS, telecom, manufacturing, and government.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
