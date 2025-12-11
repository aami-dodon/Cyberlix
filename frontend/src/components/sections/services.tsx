"use client";

const services = [
  {
    title: "vCISO & Information Security Leadership",
    description:
      "Gain access to senior cybersecurity leadership without hiring full-time. Our vCISO service delivers security governance, regulatory guidance, strategic risk insights, and executive-level reporting to help organizations build strong, sustainable security programs.",
    highlights: [
      "Information security leadership and guidance",
      "Executive and board-level security presentations",
      "Security governance, risk, and compliance",
      "Regulatory advisory services",
      "Cybersecurity tools consulting and implementation",
      "Periodic review and updates of security practices",
      "Strategic reporting for stakeholders",
    ],
  },
  {
    title: "Cyber Security Maturity Assessment",
    description:
      "Understand your organization’s current cybersecurity posture and build a structured roadmap for improvement. Cynalitx assesses maturity against global standards and provides a multi-year plan to elevate readiness.",
    highlights: [
      "Assess security posture against standards",
      "Identify gaps and improvement areas",
      "Design 2–3 year improvement roadmap",
      "Assist in roadmap implementation",
      "Continuous assessment to measure progress",
    ],
  },
  {
    title: "Cloud Security",
    description:
      "Strengthen and optimize cloud environments across AWS, Azure, GCP, and hybrid setups. We enable secure cloud adoption with configuration reviews, access controls, and compliance alignment.",
    highlights: [
      "Cloud configuration review",
      "Roadmap to manage cloud security risks",
      "Cloud access control frameworks",
      "Data encryption standards",
      "Compliance with cloud security standards",
      "Continuous cloud monitoring",
    ],
  },
  {
    title: "Data Security",
    description:
      "Protect your organization's most critical asset — data. Cynalitx helps classify, secure, and control sensitive information across systems and workflows.",
    highlights: [
      "Data classification and flow diagrams",
      "Identifying required security controls",
      "Data Loss Prevention (DLP) implementation",
      "Access management solutions",
      "Data encryption policies",
      "Email and internet security controls",
    ],
  },
  {
    title: "Governance, Risk & Compliance (GRC)",
    description:
      "Establish a strong governance foundation and meet regulatory and industry-standard compliance requirements with our structured GRC framework.",
    highlights: [
      "Enterprise risk management",
      "ISO certification consulting",
      "SOC 1 & SOC 2 readiness and audits",
      "Compliance with ISO, NIST, PCI DSS, GDPR",
      "Supply chain & third-party risk assessments",
      "Cybersecurity governance frameworks",
      "Security awareness programs & simulations",
    ],
  },
  {
    title: "Managed Security Operations Center (SOC)",
    description:
      "A 24×7 next-generation SOC combining AI, ML, and advanced analytics to detect, analyze, and respond to cybersecurity threats in real time.",
    highlights: [
      "Next-gen SOC operations",
      "ML & AI-based threat detection",
      "Unified threat detection & remediation",
      "Incident & crisis response",
      "Integrated compliance use cases",
      "Flexible billing (per device, not EPS)",
      "24×7×365 SLA-backed operations",
    ],
  },
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    description:
      "Expert-driven VAPT services to identify vulnerabilities, strengthen defenses, and ensure compliance with regulatory requirements.",
    highlights: [
      "CERT-In empaneled security experts",
      "On-demand vulnerability scanning",
      "Remediation guidance",
      "End-to-end vulnerability management",
      "Red team assessments",
      "Breach and attack simulations",
      "Compliance-driven testing",
      "Mobile app, API, AI, CI/CD assessments",
      "Actionable insights for defense improvement",
    ],
  },
  {
    title: "Cyber Warriors On-Premises",
    description:
      "Deploy trained cybersecurity professionals directly within your organization to scale operations, support specialized tasks, and enhance security maturity.",
    highlights: [
      "On-site trained cybersecurity resources",
      "Broad skill coverage for enterprise needs",
      "On-demand deployment",
      "Threat monitoring",
      "Dark web monitoring",
      "Custom security solutions",
      "Skill enhancement programs for internal teams",
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[var(--card)]/95 p-10">
      <p className="text-xs uppercase tracking-[0.4em] text-[var(--sidebar-foreground)]/60">
        Services
      </p>
      <h2 className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
        Services designed for every risk profile
      </h2>
      <div className="mt-8 grid gap-6 text-sm text-[var(--sidebar-foreground)] md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="space-y-3 bg-[var(--card)]/90 p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">{service.title}</h3>
            <p className="text-sm leading-relaxed">{service.description}</p>
            <ul className="list-disc pl-5 text-[var(--sidebar-foreground)]/80">
              {service.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
