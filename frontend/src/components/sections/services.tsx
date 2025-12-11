"use client";

import { Shield, BarChart3, Cloud, MonitorPlay, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";

const services = [
  {
    title: "vCISO & Information Security Leadership",
    description:
      "Gain access to senior cybersecurity leadership without hiring full-time. Our vCISO service delivers security governance, regulatory guidance, and strategic risk insights.",
    icon: Shield,
  },
  {
    title: "Cyber Security Maturity Assessment",
    description:
      "Understand your organization’s current cybersecurity posture and build a structured roadmap for improvement against global standards.",
    icon: BarChart3,
  },
  {
    title: "Cloud Security",
    description:
      "Strengthen and optimize cloud environments across AWS, Azure, GCP, and hybrid setups with configuration reviews and access controls.",
    icon: Cloud,
  },
  {
    title: "Managed Security Operations Center (SOC)",
    description:
      "A 24×7 next-generation SOC combining AI, ML, and advanced analytics to detect, analyze, and respond to cybersecurity threats in real time.",
    icon: MonitorPlay,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-[var(--background)] py-24 h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute right-0 top-1/4 h-1/2 w-1/3 bg-[var(--primary)]/5 blur-[120px]" />

      <div className="layout-container relative z-10">
        <FadeInSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-3 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                Our Expertise
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
                Comprehensive security
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] line-clamp-2">
                End-to-end cybersecurity solutions tailored to your specific risk profile.
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-10">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 p-6 transition-all duration-300 hover:border-[var(--primary)]/50 hover:bg-[var(--card)] hover:shadow-lg hover:-translate-y-1 flex flex-col"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-5 flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] ring-1 ring-[var(--primary)]/20 transition-colors group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)]">
                    <service.icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors line-clamp-2 min-h-[3.5rem]">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)] mb-5 flex-grow line-clamp-4">
                    {service.description}
                  </p>

                  <div className="flex items-center text-sm font-semibold text-[var(--primary)] group-hover:translate-x-1 transition-transform cursor-pointer mt-auto">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={400}>
          <div className="flex justify-center mt-8">
            <Button
              variant="default"
              size="lg"
              className="h-12 px-8 text-base font-semibold shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 border border-[var(--primary)]/50"
              asChild
            >
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
