import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  FileText,
  Globe,
  Network,
  Shield,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    label: "Security Disciplines",
    value: "6+",
    detail: "Managed SOC, VAPT, CSPM, GRC, IR, AI audits",
  },
  {
    label: "Industries Served",
    value: "BFSI • Healthcare • SaaS • Telecom • Govt • Manufacturing",
    detail: "ICP: Mid-market & enterprise",
  },
  {
    label: "Regions Covered",
    value: "India · SE Asia · Middle East · North America",
    detail: "Glocal delivery hubs",
  },
  {
    label: "AI Systems Oversighted",
    value: "120+",
    detail: "Explainability, bias & compliance reviews",
  },
];

const products = [
  {
    id: "cynaguard",
    name: "CynaGuard GRC",
    tagline: "Governance, Risk & Compliance Automation Platform",
    description:
      "Automates compliance mapping, risk assessments, internal audits, and continuous control monitoring with a unified control fabric.",
    benefits: [
      "Real-time compliance dashboards",
      "Automated workflow orchestration & evidence collection",
      "Audit-ready insights and cross-framework mappings",
    ],
  },
  {
    id: "apertia",
    name: "Apertia AI Oversight Suite",
    tagline: "Responsible AI monitoring & regulatory alignment",
    description:
      "Ensures AI systems are transparent, explainable, ethical, and aligned with global regulations through continuous monitoring.",
    benefits: [
      "AI risk scoring & lifecycle governance",
      "Bias detection plus explainability narratives",
      "EU AI Act, NIST AI RMF, and emerging policy support",
    ],
  },
];

const services = [
  {
    name: "Managed SOC",
    summary: "24/7 hybrid SOC with AI-native playbooks.",
    detail:
      "Integrated threat intel, automated response runbooks, and analyst-assisted investigations reduce dwell time across on-prem and cloud workloads.",
    coverage: ["SIEM engineering", "Threat hunting", "Incident response desk"],
  },
  {
    name: "Vulnerability Assessment & Penetration Testing",
    summary: "Network, application, API, and cloud VAPT sprints.",
    detail:
      "Blends automated discovery with manual red teaming to validate exploitable paths before adversaries do.",
    coverage: ["Red teaming", "API fuzzing", "Reverse engineering workshops"],
  },
  {
    name: "Cloud Security Posture Management",
    summary: "CSPM blueprints for AWS, Azure, and multi-cloud estates.",
    detail:
      "Provides guardrails, terraform policy packs, and continuous control validation aligned to CIS, RBI, and industry mandates.",
    coverage: ["IaC scanning", "Cloud hardening", "DevSecOps enablement"],
  },
  {
    name: "GRC Consulting",
    summary: "Strategic advisory tied to the CynaGuard automation layer.",
    detail:
      "Risk quantification, control library design, board reporting, and regulator-ready documentation in weeks instead of quarters.",
    coverage: ["ISO 27001", "SOC 2", "GDPR", "RBI CS Guidelines"],
  },
  {
    name: "AI Governance Audits",
    summary: "Full lifecycle oversight assessments for ML programs.",
    detail:
      "Evaluates data pipelines, model risk, explainability, and accountability frameworks with Apertia data.",
    coverage: ["Bias reviews", "Explainability scoring", "Policy mapping"],
  },
  {
    name: "Incident Response & Resilience",
    summary: "Retainers and IR playbooks built for regulated enterprises.",
    detail:
      "Zero-trust containment strategies, executive communications, and tabletop exercises anchored to realistic attack chains.",
    coverage: ["Retainer", "Tabletop", "Regulator liaison"],
  },
];

const differentiators = [
  {
    title: "AI-native Workflows",
    body: "Security and governance automation fed by proprietary AI Explainability Engine for cross-domain insights.",
  },
  {
    title: "Glocal Expertise",
    body: "Delivery pods across India, APAC, Middle East, and North America for around-the-clock compliance coverage.",
  },
  {
    title: "Unified Dashboards",
    body: "Single view of cyber risk, compliance status, and AI observability to align CISOs, risk leaders, and AI owners.",
  },
  {
    title: "Human Intelligence",
    body: "Seasoned security analysts, compliance strategists, and data scientists embedded with client teams.",
  },
];

const uniqueFrameworks = [
  "AI Explainability Engine",
  "CynaRisk Scoring Model",
  "Continuous Compliance Automation",
  "GRC Intelligence Engine for multi-framework alignment",
];

const complianceStandards = [
  "ISO 27001",
  "SOC 2",
  "GDPR",
  "RBI Cybersecurity Guidelines",
  "NIST CSF",
  "EU AI Act (emerging)",
];

const caseStudies = [
  {
    industry: "BFSI",
    focus: "Digitized RBI cyber checklist & real-time SOC reporting for a regional bank.",
    status: "Publishing soon",
  },
  {
    industry: "SaaS",
    focus: "CynaGuard-led SOC 2 Type 2 readiness with continuous control monitoring.",
    status: "Publishing soon",
  },
  {
    industry: "Healthcare",
    focus: "HIPAA-aligned AI model governance for diagnostics and claims automation.",
    status: "Publishing soon",
  },
];

const testimonials = [
  {
    quote:
      "“Cynalitx collapsed months of manual evidence gathering into automated workflows while keeping regulators confident.”",
    author: "Enterprise CISO (Anonymous)",
  },
  {
    quote:
      "“The Apertia team translated opaque AI models into board-friendly assurance packs we could sign off.”",
    author: "Head of AI, Fortune 500 Manufacturer (Anonymous)",
  },
];

const blogCategories = [
  {
    title: "Cybersecurity Best Practices",
    focus: "Playbooks across SOC modernization, VAPT hygiene, and board reporting.",
    cadence: "Bi-weekly insights",
  },
  {
    title: "AI Governance",
    focus: "Responsible AI controls, bias mitigation, explainability, and EU AI Act readiness.",
    cadence: "Monthly thought leadership",
  },
  {
    title: "Regulatory Updates",
    focus: "Timely notes on RBI, SEBI, MAS, NIST, GDPR, and emerging AI standards.",
    cadence: "Regulation tracker",
  },
  {
    title: "Technical Deep Dives",
    focus: "Architecture walk-throughs, detection content, and ML security research.",
    cadence: "Labs features",
  },
];

const whitepapers = [
  {
    title: "AI Risk Framework 2025",
    topic: "Enterprise methodology aligning AI policies with EU AI Act and NIST AI RMF.",
    status: "In production — gated download planned",
  },
  {
    title: "Modern GRC Automation Guide",
    topic: "Pragmatic roadmap to automate ISO 27001, SOC 2, GDPR, and RBI controls.",
    status: "In production — gated download planned",
  },
];

const productDeepDive = [
  {
    id: "cynaguard",
    headline: "CynaGuard GRC — End-to-end governance platform",
    description:
      "Purpose-built for CISOs, compliance officers, and risk managers who require live compliance status without the spreadsheet chaos.",
    target: "Personas: CISOs, Compliance Officers, Risk Leaders",
    features: [
      "Policy management with automated versioning",
      "Risk registry enriched with CynaRisk scoring model",
      "Real-time monitoring & alerting on control drift",
      "Audit readiness kits with mapped evidence",
    ],
    faq: [
      {
        question: "What frameworks do you support?",
        answer:
          "ISO 27001, SOC 2, GDPR, RBI Cybersecurity Guidelines, NIST CSF, and custom corporate policies out-of-the-box.",
      },
      {
        question: "How is data stored?",
        answer:
          "Data is encrypted in transit and at rest with regional data residency options and zero-trust access principles.",
      },
    ],
    pricing: "Tiered licensing with optional managed content packs.",
    demoFlow: "Request demo only • Screenshots coming soon.",
  },
  {
    id: "apertia",
    headline: "Apertia AI Oversight — AI transparency & controls",
    description:
      "Designed for CTOs, AI leaders, and compliance heads needing continuous insight across ML pipelines.",
    target: "Personas: CTOs, AI Program Owners, Compliance Heads",
    features: [
      "Explainability narratives for regulators and business users",
      "Bias detection and fairness monitoring across datasets",
      "AI risk monitoring with severity scoring",
      "Regulatory mapping across EU AI Act, NIST AI RMF, RBI guidance",
    ],
    faq: [
      {
        question: "How does oversight integrate with ML pipelines?",
        answer:
          "Native connectors for MLOps stacks, APIs for CI/CD triggers, and evidence snapshotting for every release.",
      },
    ],
    pricing: "Subscription pricing aligned to AI system volume.",
    demoFlow: "Request demo • Screenshots coming soon.",
  },
];

const seoKeywords = [
  "AI governance tools",
  "cybersecurity services 2025",
  "GRC automation platform",
  "AI compliance",
];

const legalNotices = [
  {
    title: "Privacy Policy (2025 refresh)",
    detail: "Covers data residency, DSR handling, and GDPR alignment.",
  },
  {
    title: "Security Statement",
    detail: "Enterprise-grade encryption, zero-trust design, continuous monitoring.",
  },
  {
    title: "AI Transparency Notice",
    detail: "Explains AI oversight methods, human-in-the-loop checkpoints, and bias remediation.",
  },
  { title: "Cookie Policy & Terms of Use", detail: "Updated for global operations." },
];

const contactFields = [
  { label: "Name", type: "text", name: "name" },
  { label: "Email", type: "email", name: "email" },
  { label: "Phone", type: "tel", name: "phone" },
  { label: "Company", type: "text", name: "company" },
  { label: "Role", type: "text", name: "role" },
  { label: "Country", type: "text", name: "country" },
];

const footerLinks = [
  { label: "About", href: "#hero" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#blog" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <section
          id="hero"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black px-6 py-16 shadow-[0_0_80px_rgba(13,148,136,0.25)] sm:px-12"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-y-0 right-0 w-3/4 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.4),_transparent_60%)]" />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.35),_transparent_55%)]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 px-4 py-1 text-sm text-emerald-300">
              <Sparkles className="size-4 text-emerald-300" />
              Intelligent Security · Responsible AI · Global Expertise
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Secure Your Digital Future with Intelligent Cyber & AI Governance
              </h1>
              <p className="max-w-3xl text-lg text-slate-200">
                Cynalitx unifies cybersecurity, GRC automation, and AI oversight into one platform.
                We help regulated enterprises anticipate risk, accelerate compliance, and keep AI systems ethical.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-emerald-400 text-slate-950 hover:bg-emerald-300" asChild>
                <Link href="#contact" aria-label="Book a demo with Cynalitx">
                  Book a Demo
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-emerald-300 hover:bg-white/5" asChild>
                <Link href="#products">View Platform Overview</Link>
              </Button>
            </div>
            <div className="grid gap-6 pt-8 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">{stat.label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-200">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="space-y-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Products Overview</p>
            <h2 className="text-3xl font-semibold text-white">Unified platforms built for regulated enterprises</h2>
            <p className="text-slate-300">
              Product cards double as quick tours. Deep dives live later on this page until dedicated pages launch.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.id}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-inner shadow-emerald-400/10"
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-sm text-emerald-300">{product.tagline}</p>
                    <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
                  </div>
                  <ShieldCheck className="size-10 text-emerald-300" />
                </div>
                <p className="text-slate-200">{product.description}</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 size-4 text-emerald-300" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button className="bg-white text-slate-950 hover:bg-slate-100" asChild>
                    <Link href={`#${product.id}`}>Learn More</Link>
                  </Button>
                  <Button variant="ghost" className="text-emerald-300 hover:bg-emerald-300/10" asChild>
                    <Link href="#contact">Request Demo</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="space-y-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Services</p>
            <h2 className="text-3xl font-semibold text-white">Core services with long-form coverage</h2>
            <p className="text-slate-300">
              Each service below has a detailed page slated for launch. For now, these tiles summarize delivery scope and
              outcomes so teams can plan roadmaps and procurement.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="mb-3 flex items-center gap-2 text-emerald-200">
                  <Shield className="size-5" />
                  <p className="text-sm uppercase tracking-[0.2em]">{service.name}</p>
                </div>
                <h3 className="text-xl font-semibold text-white">{service.summary}</h3>
                <p className="mt-3 text-sm text-slate-300">{service.detail}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-200">
                  {service.coverage.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <ArrowUpRight className="size-4 text-emerald-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="text-sm text-slate-400">
            Need deeper documentation? Detailed service blueprints and SLAs can be shared under NDA and are referenced in
            the Requirements document as “Need detailed service pages”.
          </p>
        </section>

        <section id="differentiators" className="space-y-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Why Cynalitx</p>
            <h2 className="text-3xl font-semibold text-white">Differentiators rooted in AI and governance</h2>
            <p className="text-slate-300">
              Faster compliance, proactive risk detection, and globally aligned AI governance delivered through unique
              tech + talent frameworks.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/10 to-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Proprietary frameworks & technologies</h3>
            <ul className="mt-3 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              {uniqueFrameworks.map((framework) => (
                <li key={framework} className="flex items-center gap-2">
                  <Sparkles className="size-4 text-emerald-300" />
                  {framework}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="case-studies" className="space-y-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Case Studies & Social Proof</p>
            <h2 className="text-3xl font-semibold text-white">Proof points queued for publication</h2>
            <p className="text-slate-300">
              Case studies and logos are pending approvals. Testimonials remain anonymous per enterprise policy but still
              highlight impact.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.industry} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <p className="text-sm text-emerald-300">{study.industry}</p>
                <p className="mt-2 text-sm text-slate-200">{study.focus}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">{study.status}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.author} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
                <p>{testimonial.quote}</p>
                <footer className="mt-4 text-sm text-slate-400">{testimonial.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="compliance" className="space-y-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Compliance & Security Assurance</p>
            <h2 className="text-3xl font-semibold text-white">Assurance across global standards</h2>
            <p className="text-slate-300">
              Cynalitx aligns to strategic controls demanded by regulators and corporate boards with continuous monitoring
              baked into service delivery.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">Standards Supported</h3>
              <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
                {complianceStandards.map((standard) => (
                  <li key={standard} className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-emerald-300" />
                    {standard}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">Security Guarantees</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <Network className="size-4 text-emerald-300" />
                  Enterprise-grade encryption in transit and at rest.
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="size-4 text-emerald-300" />
                  Zero-trust design principles spanning glocal delivery centers.
                </li>
                <li className="flex items-start gap-2">
                  <Brain className="size-4 text-emerald-300" />
                  Continuous monitoring with AI-assisted anomaly detection.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="pricing" className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Pricing & Packaging</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Tailored engagement over rigid tiers</h2>
          <p className="mt-4 text-slate-300">
            Platform licensing is tiered by control volume and AI system coverage, while consulting services follow
            project-based or retainer pricing. Per requirements, pricing is not published publicly. Engage the sales team
            for tailored bundles that match your maturity curve.
          </p>
        </section>

        <section id="blog" className="space-y-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Blog / Insights</p>
            <h2 className="text-3xl font-semibold text-white">Editorial roadmap</h2>
            <p className="text-slate-300">
              The Insights hub launches with four category pillars capturing tactical know-how and policy intelligence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {blogCategories.map((category) => (
              <article key={category.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-sm text-emerald-200">{category.cadence}</p>
                  </div>
                  <FileText className="size-6 text-emerald-300" />
                </div>
                <p className="mt-4 text-sm text-slate-300">{category.focus}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="whitepapers" className="space-y-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Whitepapers & Thought Leadership</p>
            <h2 className="text-3xl font-semibold text-white">Gated research pipeline</h2>
            <p className="text-slate-300">Downloads will be gated with CRM capture as soon as PDFs are finalized.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {whitepapers.map((paper) => (
              <article key={paper.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <h3 className="text-xl font-semibold text-white">{paper.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{paper.topic}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">{paper.status}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="product-deep-dive" className="space-y-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Dedicated Product Pages (Preview)</p>
            <h2 className="text-3xl font-semibold text-white">Detailed breakdowns ahead of full microsites</h2>
            <p className="text-slate-300">
              Each product below summarizes its positioning, key features, FAQs, pricing approach, and demo experience per
              the Requirements brief.
            </p>
          </div>
          {productDeepDive.map((product) => (
            <article
              key={product.id}
              id={product.id}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8"
            >
              <div className="flex flex-col gap-3">
                <p className="text-sm text-emerald-300">{product.headline}</p>
                <h3 className="text-2xl font-semibold text-white">{product.target}</h3>
                <p className="text-slate-200">{product.description}</p>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-lg font-semibold text-white">Key Features</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 size-4 text-emerald-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">FAQs</h4>
                  <div className="mt-3 space-y-3 text-sm text-slate-200">
                    {product.faq.map((faq) => (
                      <div key={faq.question}>
                        <p className="font-medium text-white">{faq.question}</p>
                        <p className="text-slate-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="rounded-full border border-white/20 px-4 py-1">{product.pricing}</span>
                <span className="rounded-full border border-white/20 px-4 py-1">{product.demoFlow}</span>
                <span className="rounded-full border border-white/20 px-4 py-1">Screenshots: To be added</span>
              </div>
            </article>
          ))}
        </section>

        <section id="mission" className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Mission & Vision</p>
            <p className="mt-4 text-xl font-semibold text-white">
              “To empower global enterprises with intelligent, ethical, and resilient security ecosystems.”
            </p>
            <p className="mt-3 text-slate-300">
              This statement guides every roadmap choice—from glocal hiring to AI oversight research—and anchors tone,
              imagery, and user experience decisions.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">SEO Keywords</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {seoKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-emerald-400/50 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-200"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="legal" className="space-y-6">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Legal & Transparency</p>
            <h2 className="text-3xl font-semibold text-white">Policy refresh checklist</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {legalNotices.map((notice) => (
              <article key={notice.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <h3 className="text-lg font-semibold text-white">{notice.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{notice.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Contact & Lead Capture</p>
            <h2 className="text-3xl font-semibold text-white">Book a strategy demo</h2>
            <p className="text-slate-300">
              Complete the form below. Leads route through CRM → Sales → Pre-Sales assignments to ensure the right domain
              experts respond within one business day.
            </p>
          </div>
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            {contactFields.map((field) => (
              <label key={field.name} className="flex flex-col gap-2 text-sm text-slate-200">
                {field.label}
                <input
                  type={field.type}
                  name={field.name}
                  required
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                  className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                />
              </label>
            ))}
            <label className="md:col-span-2 flex flex-col gap-2 text-sm text-slate-200">
              Message
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Describe your security or AI governance goals..."
                className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
              />
            </label>
            <div className="md:col-span-2">
              <div className="rounded-xl border border-dashed border-white/20 bg-black/30 px-4 py-6 text-sm text-slate-400">
                Captcha validation placeholder — Google reCAPTCHA Enterprise will be integrated per requirement
                “Captcha Required”.
              </div>
            </div>
            <div className="md:col-span-2 flex flex-wrap items-center gap-4">
              <Button className="bg-emerald-400 text-slate-950 hover:bg-emerald-300" size="lg">
                Submit & Route Lead
              </Button>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">CRM → Sales → Pre-Sales workflow</p>
            </div>
          </form>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:px-8">
          <p className="text-base font-semibold text-white">Cynalitx</p>
          <p className="text-slate-400">
            Deep blue, neon green, and charcoal black palette extends through the footer per brand guidance. Modern
            sans-serif (Geist) keeps typography aligned with Inter/Roboto preferences.
          </p>
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-slate-300 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} className="flex items-center gap-2 text-slate-300 hover:text-white">
                <ArrowUpRight className="size-4" />
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-slate-500">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
