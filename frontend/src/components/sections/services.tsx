"use client";

import { Shield, BarChart3, Cloud, Database, FileCheck, MonitorPlay, Crosshair, Users } from "lucide-react";

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
    icon: Shield,
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
    icon: BarChart3,
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
    icon: Cloud,
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
    icon: Database,
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
    icon: FileCheck,
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
    icon: MonitorPlay,
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
    icon: Crosshair,
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
    icon: Users,
  },
];

export function ServicesSection() {
  return (
    <section className="relative bg-[var(--background)] py-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute right-0 top-1/4 h-1/2 w-1/3 bg-[var(--primary)]/5 blur-[120px]" />

      <div className="layout-container relative z-10">
        <div className="space-y-4 mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
            Services designed for every risk profile
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all duration-300 hover:border-[var(--primary)]/50 hover:shadow-[0_0_30px_-5px_var(--primary)]/30 hover:-translate-y-1"
            >
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-[var(--primary)]/10 p-3 text-[var(--primary)] ring-1 ring-[var(--primary)]/20 transition-colors group-hover:bg-[var(--primary)]/20 group-hover:text-[var(--primary)]">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
                  {service.description}
                </p>

                <div className="pt-4">
                  <ul className="space-y-2">
                    {service.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]/90">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--secondary)] flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
