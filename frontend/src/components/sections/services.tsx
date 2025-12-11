"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { Card } from "@/components/ui/card";
import { FadeInSection } from "@/components/ui/fade-in-section";
import homeContent from "@/content/home.json";
import servicesContent from "@/content/services.json";
import { mapServicesWithIcons } from "@/lib/service-icon-map";

const servicesSectionContent = homeContent.servicesSection;
const servicesData = mapServicesWithIcons(servicesContent.list);

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-background py-24 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute right-0 top-1/4 h-1/2 w-1/3 bg-primary/5 blur-[120px]" />
      <BackgroundGrid />

      <div className="layout-container relative z-10">
        <FadeInSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-3 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                {servicesSectionContent.eyebrow}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                {servicesSectionContent.title}
              </h2>
              <p className="text-lg text-muted-foreground line-clamp-2">
                {servicesSectionContent.description}
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-10">
            {servicesData.slice(0, 4).map((service) => (
              <Card
                key={service.title}
                variant="interactive"
                className="group relative overflow-hidden bg-card/50 p-6 flex flex-col hover:bg-card"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-5 flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground mb-5 flex-grow line-clamp-4">
                    {service.description}
                  </p>

                  <a href={`/services/${service.slug}`} className="flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform cursor-pointer mt-auto">
                    {servicesSectionContent.cardLinkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={400}>
          <div className="flex justify-center mt-8">
            <Button
              variant="glow"
              size="lg"
              className="h-12 px-8 text-base font-semibold transition-all duration-300"
              asChild
            >
              <a href={servicesSectionContent.cta.href}>{servicesSectionContent.cta.label}</a>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
