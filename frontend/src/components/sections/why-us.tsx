"use client";

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
    <section className="bg-[var(--card)]/95 p-10">
      <p className="text-xs uppercase tracking-[0.4em] text-[var(--sidebar-foreground)]/60">
        Why Cynalitx
      </p>
      <h2 className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
        Why Cynalitx
      </h2>
      <ul className="mt-6 flex flex-col gap-3 text-[var(--sidebar-foreground)]/90">
        {reasons.map((reason) => (
          <li key={reason} className="flex items-center gap-3 text-sm">
            <span className="inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--foreground)]" />
            {reason}
          </li>
        ))}
      </ul>
    </section>
  );
}
