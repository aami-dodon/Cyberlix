"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const leaders = [
  {
    name: "Raamesh Kotian",
    title: "Co-Founder",
    initials: "RK",
    bio: [
      "Raamesh Kotian has over 28 years of experience in Information Technology, Cyber Risk, Data Science, and Business Transformation.",
      "He has held senior leadership roles in Credit Suisse, IDFC Bank, Poonawalla Fincorp, and HDFC Bank, and has also worked with Big 4 consulting firms and in the USA on SOX programs.",
      "He has led major cyber risk functions, built enterprise security capabilities, and guided organizations through complex regulatory environments.",
      "Raamesh is a mentor, coach, and frequent speaker at industry events including RSA Asia and DSCI Annual Conference.",
    ],
  },
  {
    name: "Amit Patil",
    title: "Co-Founder",
    initials: "AP",
    bio: [
      "Amit Patil is a cybersecurity leader with 18+ years of experience across banking, financial services, and technology sectors.",
      "He has served as Deputy CISO at RBL Bank and as Head of Information Security at Syngene International.",
      "Amit specializes in enterprise security architecture, cloud and data security, third-party risk management, and regulatory compliance frameworks including ISO 27001, SOC 2, and PCI DSS.",
      "He is known for his practical, risk-based approach and strong alignment of cybersecurity with business outcomes.",
    ],
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

        <div className="grid gap-8 md:grid-cols-2">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all hover:border-[var(--primary)]/50 hover:shadow-[0_0_30px_-5px_var(--primary)]/20"
            >
              <div className="flex items-start gap-6 mb-6">
                <Avatar className="h-20 w-20 border-2 border-[var(--primary)] shadow-[0_0_15px_var(--primary)]/50 transition-transform group-hover:scale-105">
                  <AvatarFallback className="bg-[var(--primary)]/20 text-[var(--primary)] text-xl font-bold">
                    {leader.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">{leader.name}</h3>
                  <p className="text-sm font-medium uppercase tracking-widest text-[var(--secondary)] mt-1">
                    {leader.title}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-[var(--muted-foreground)]">
                {leader.bio.map((line) => (
                  <p key={line} className="text-base leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
