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
    <section className="bg-[var(--card)]/95 p-10">
      <p className="text-xs uppercase tracking-[0.4em] text-[var(--sidebar-foreground)]/60">
        Leadership
      </p>
      <h2 className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
        Leadership
      </h2>
      <div className="mt-6 flex flex-col gap-6 text-[var(--sidebar-foreground)]">
        {leaders.map((leader) => (
          <article key={leader.name} className="space-y-3 border-t border-[var(--border)] pt-6">
            <div className="flex items-center gap-4">
              <Avatar className="border border-[var(--border)]">
                <AvatarFallback>{leader.initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-[var(--foreground)]">{leader.name}</p>
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--sidebar-foreground)]/70">
                  {leader.title}
                </p>
              </div>
            </div>
            {leader.bio.map((line) => (
              <p key={line} className="text-sm leading-relaxed">
                {line}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
