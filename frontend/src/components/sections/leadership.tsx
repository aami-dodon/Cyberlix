"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";

const leaders = [
  {
    name: "Raamesh Kotian",
    title: "Co-Founder",
    image: "/images/team/ramesh.jpeg",
    initials: "RK",
    bio: [
      "Raamesh Kotian has over 28 years of experience in Information Technology, Cyber Risk, Data Science, and Business Transformation.",
      "He has held senior leadership roles in Credit Suisse, IDFC Bank, Poonawalla Fincorp, and HDFC Bank, and has also worked with Big 4 consulting firms and in the USA on SOX programs.",
      "He has led major cyber risk functions, built enterprise security capabilities, and guided organizations through complex regulatory environments.",
      "Raamesh is a mentor, coach, and frequent speaker at industry events including RSA Asia and DSCI Annual Conference.",
    ],
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:contact@cynalitx.com",
    },
  },
  {
    name: "Amit Patil",
    title: "Co-Founder",
    image: "/images/team/amit.jpeg",
    initials: "AP",
    bio: [
      "Amit Patil is a cybersecurity leader with 18+ years of experience across banking, financial services, and technology sectors.",
      "He has served as Deputy CISO at RBL Bank and as Head of Information Security at Syngene International.",
      "Amit specializes in enterprise security architecture, cloud and data security, third-party risk management, and regulatory compliance frameworks including ISO 27001, SOC 2, and PCI DSS.",
      "He is known for his practical, risk-based approach and strong alignment of cybersecurity with business outcomes.",
    ],
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:contact@cynalitx.com",
    },
  },
];

export function LeadershipSection() {
  return (
    <section className="relative bg-[var(--background)] py-24">
      <div className="layout-container space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
            Visionaries behind the shield
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all hover:border-[var(--primary)]/50 hover:shadow-[0_0_30px_-5px_var(--primary)]/20"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                <Avatar className="h-24 w-24 border-2 border-[var(--primary)] shadow-[0_0_15px_var(--primary)]/50 transition-transform group-hover:scale-105">
                  <AvatarImage src={leader.image} alt={leader.name} />
                  <AvatarFallback className="bg-[var(--primary)]/20 text-[var(--primary)] text-2xl font-bold">
                    {leader.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-medium uppercase tracking-widest text-[var(--primary)]">
                    {leader.title}
                  </p>
                  <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                    <a
                      href={leader.socials.linkedin}
                      className="hover:text-[var(--primary)] transition-colors"
                      aria-label={`${leader.name} on LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={leader.socials.twitter}
                      className="hover:text-[var(--primary)] transition-colors"
                      aria-label={`${leader.name} on Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={leader.socials.email}
                      className="hover:text-[var(--primary)] transition-colors"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-[var(--muted-foreground)] flex-grow">
                {leader.bio.map((line, index) => (
                  <p key={index} className="text-base leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto group/btn border-[var(--primary)]/20 hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                >
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
