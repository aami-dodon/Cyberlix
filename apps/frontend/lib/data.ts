import {
  BlogMeta,
  CaseStudy,
  ComplianceFramework,
  ProductCard,
  SecurityAssurance,
  ServiceItem,
} from '@cynalitx/types';

export const heroStats = [
  { label: 'Global coverage', value: '24/7' },
  { label: 'Risk reduction', value: '-45%' },
  { label: 'Audit readiness', value: '< 2 weeks' },
];

export const products: ProductCard[] = [
  {
    id: 'cynaguard-grc',
    name: 'CynaGuard GRC',
    tagline: 'Governance, Risk & Compliance Automation',
    summary:
      'Map frameworks, orchestrate controls, and keep evidence audit-ready with continuous monitoring.',
    benefits: [
      'Automated control testing',
      'Risk registry with real-time scoring',
      'Audit-ready evidence vault',
    ],
    cta: 'demo',
  },
  {
    id: 'apertia-ai',
    name: 'Apertia AI Oversight',
    tagline: 'AI governance, explainability, and compliance',
    summary:
      'Make AI systems transparent, safe, and aligned to global regulations with ongoing risk monitoring.',
    benefits: [
      'Bias + drift detection',
      'Model cards and lineage',
      'Regulatory mapping across regions',
    ],
    cta: 'demo',
  },
];

export const services: ServiceItem[] = [
  {
    id: 'managed-soc',
    name: 'Managed SOC',
    description: '24/7 threat hunting with AI-native playbooks and continuous detection coverage.',
    outcomes: [
      'Tiered response with MITRE ATT&CK',
      'Automated containment workflows',
      'Threat intel mapped to your stack',
    ],
  },
  {
    id: 'vapt',
    name: 'VAPT & Red Teaming',
    description: 'Offensive security across networks, applications, APIs, and cloud workloads.',
    outcomes: ['Exploit-path reporting', 'Remediation sprints', 'Purple-team simulations'],
  },
  {
    id: 'cloud-security',
    name: 'Cloud Security Posture',
    description: 'Hardening for multi-cloud, container, and data layers with zero-trust defaults.',
    outcomes: ['CSPM + CIEM baselines', 'Kubernetes guardrails', 'Data security posture mapping'],
  },
  {
    id: 'grc-consulting',
    name: 'GRC Consulting',
    description:
      'Strategy, audits, and control design across ISO 27001, SOC2, RBI, GDPR, and more.',
    outcomes: [
      'Control rationalization',
      'Policy design and training',
      'Continuous compliance automation',
    ],
  },
  {
    id: 'ai-governance',
    name: 'AI Governance Audits',
    description:
      'Assess and assure AI models for fairness, transparency, and regulatory readiness.',
    outcomes: [
      'Risk + ethics scoring',
      'Model interpretability reviews',
      'Regulatory mapping including EU AI Act',
    ],
  },
  {
    id: 'incident-response',
    name: 'Incident Response',
    description: 'Crisis-ready response teams with tabletop exercises and forensic readiness.',
    outcomes: [
      'Runbooks and playbooks',
      'Breach triage and containment',
      'Lessons-learned with hardening',
    ],
  },
];

export const differentiators = [
  {
    title: 'AI-native security',
    detail: 'Automation-first workflows powered by explainable AI models and CynaRisk scoring.',
  },
  {
    title: 'Unified governance',
    detail: 'Crosswalks across ISO 27001, SOC2, NIST CSF, RBI and emerging AI regulations.',
  },
  {
    title: 'Operational clarity',
    detail:
      'Unified dashboards for risk, compliance, and AI observability tailored to CISOs and boards.',
  },
  {
    title: 'Glocal expertise',
    detail:
      'Teams across India, SEA, Middle East, and North America with local regulatory context.',
  },
];

export const complianceFrameworks: ComplianceFramework[] = [
  {
    id: 'iso27001',
    name: 'ISO 27001',
    description: 'ISMS design, controls, and continuous monitoring.',
  },
  { id: 'soc2', name: 'SOC2', description: 'Trust principles mapped to automated evidence.' },
  { id: 'gdpr', name: 'GDPR', description: 'Data privacy, DPIAs, and cross-border safeguards.' },
  {
    id: 'rbi',
    name: 'RBI Cybersecurity',
    description: 'Sector-grade controls for BFSI and fintech ecosystems.',
  },
  { id: 'nist', name: 'NIST CSF', description: 'Risk-aligned controls with maturity scoring.' },
  {
    id: 'euai',
    name: 'EU AI Act',
    description: 'Emerging compliance with AI transparency and risk classes.',
  },
];

export const assurances: SecurityAssurance[] = [
  {
    standard: 'Zero-trust by design',
    statement:
      'Identity-first controls, least privilege, and continuous verification across cloud and data.',
  },
  {
    standard: 'Enterprise-grade crypto',
    statement: 'Encryption in transit and at rest with strict key management and auditing.',
  },
  {
    standard: 'Continuous monitoring',
    statement: 'Automated detections with human-in-the-loop analysts for critical incidents.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    sector: 'BFSI',
    summary: 'Unified RBI + ISO 27001 controls with automated evidence collection.',
    outcomes: [
      'Reduced audit prep from months to weeks',
      'Tiered playbooks for fraud and API abuse',
    ],
    anonymous: true,
  },
  {
    sector: 'SaaS',
    summary: 'SOC2 readiness plus AI model governance for a multi-region platform.',
    outcomes: ['Risk scoring for ML workflows', 'Shift-left security for product teams'],
    anonymous: true,
  },
];

export const blogHighlights: BlogMeta[] = [
  {
    slug: 'ai-governance-2025',
    title: 'AI Governance Playbook for 2025',
    category: 'ai-governance',
    excerpt:
      'Operationalize AI oversight with explainability, bias detection, and regulatory readiness.',
    author: 'Cynalitx Labs',
    readingMinutes: 6,
    published: '2025-01-12',
  },
  {
    slug: 'modern-grc-automation',
    title: 'Modern GRC Automation for Hybrid Enterprises',
    category: 'cybersecurity',
    excerpt: 'How to automate evidence, map controls, and stay audit-ready across clouds.',
    author: 'Cynalitx Labs',
    readingMinutes: 5,
    published: '2025-02-08',
  },
  {
    slug: 'red-teaming-ai',
    title: 'Red Teaming AI Systems: A Practical Guide',
    category: 'deep-dive',
    excerpt: 'Testing AI safety and robustness with offensive techniques and controlled blasts.',
    author: 'Cynalitx Labs',
    readingMinutes: 7,
    published: '2025-03-22',
  },
];
