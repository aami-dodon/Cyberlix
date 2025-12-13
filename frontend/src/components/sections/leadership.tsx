"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import homeContent from "@/content/home.json";
import leadershipContent from "@/content/leadership.json";

const leadershipSectionContent = homeContent.leadership;
const leadershipData = leadershipContent.leaders;

export function LeadershipSection() {
  return (
    <section id="leadership" className="relative scroll-mt-24 bg-background py-24 min-h-screen flex flex-col justify-center overflow-hidden">
      <BackgroundGrid />
      <div className="layout-container relative z-10 space-y-12">
        <FadeInSection className="text-center space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {leadershipSectionContent.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {leadershipSectionContent.heading}
          </h2>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {leadershipData.map((leader) => (
              <Card
                key={leader.name}
                variant="interactive"
                className="group relative flex flex-col overflow-hidden p-8"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                  <Avatar className="h-24 w-24 border-2 border-primary shadow-[0_0_15px_var(--primary)]/50 transition-transform group-hover:scale-105">
                    <AvatarImage src={leader.image} alt={leader.name} />
                    <AvatarFallback className="bg-primary/20 text-primary text-2xl font-bold">
                      {leader.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-widest text-primary">
                      {leader.title}
                    </p>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <a
                        href={leader.socials.linkedin}
                        className="hover:text-primary transition-colors"
                        aria-label={`${leader.name} on LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={leader.socials.twitter}
                        className="hover:text-primary transition-colors"
                        aria-label={`${leader.name} on Twitter`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href={leader.socials.email}
                        className="hover:text-primary transition-colors"
                        aria-label={`Email ${leader.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground flex-grow">
                  <p className="text-base leading-relaxed">
                    {leader.shortBio}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button
                    variant="glow"
                    size="xl"
                    className="w-full sm:w-auto group/btn rounded-full"
                    asChild
                  >
                    <Link href={`/leadership/${leader.slug}`}>
                      {leadershipSectionContent.ctaLabel}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
