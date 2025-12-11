"use client";

import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeInSection } from "@/components/ui/fade-in-section";

const reasons = [
  "Led by industry veterans with decades of cybersecurity leadership experience",
  "Proven capabilities across banking, financial services, and technology sectors",
  "AI/ML-powered threat detection and next-gen SOC",
  "Deep expertise in compliance frameworks (ISO 27001, SOC 2, PCI DSS, GDPR, NIST)",
  "Flexible engagement models tailored to business needs",
  "24×7 monitoring and rapid response capabilities",
  "Strong focus on aligning security with business growth",
];

export function WhyUsSection() {
  return (
    <section id="why-cynalitx" className="relative overflow-hidden bg-background py-24 h-screen flex flex-col justify-center">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="layout-container relative z-10 grid gap-12 md:grid-cols-2 items-center">
        <FadeInSection className="space-y-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Why Cynalitx
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
            Why leading enterprises <span className="text-primary">trust us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just secure your data; we empower your business to grow with confidence.
          </p>
        </FadeInSection>

        <FadeInSection delay={200}>
          <Card variant="glass" className="p-8">
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 rounded-full bg-primary/20 p-1 text-primary">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <span className="text-base text-card-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </Card>
        </FadeInSection>
      </div>
    </section>
  );
}
