export type ProductId = 'cynaguard-grc' | 'apertia-ai';

export interface ProductCard {
  id: ProductId;
  name: string;
  tagline: string;
  summary: string;
  benefits: string[];
  cta: 'demo' | 'learn';
}

export type ServiceId =
  | 'managed-soc'
  | 'vapt'
  | 'cloud-security'
  | 'grc-consulting'
  | 'ai-governance'
  | 'incident-response';

export interface ServiceItem {
  id: ServiceId;
  name: string;
  description: string;
  outcomes: string[];
}

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  country: string;
  message?: string;
  interest?: ProductId | ServiceId;
  source?: string;
  captchaToken: string;
}

export interface DemoRequest extends Omit<ContactRequest, 'interest'> {
  productId: ProductId;
  preferredTime?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: string[];
  traceId?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}

export interface LeadRecord {
  id: string;
  status: 'received' | 'validated' | 'routed';
  createdAt: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  category: 'cybersecurity' | 'ai-governance' | 'regulations' | 'deep-dive';
  excerpt: string;
  author: string;
  readingMinutes: number;
  published: string;
}

export interface ComplianceFramework {
  id: string;
  name: string;
  description: string;
}

export interface CaseStudy {
  sector: string;
  summary: string;
  outcomes: string[];
  anonymous?: boolean;
}

export interface SecurityAssurance {
  standard: string;
  statement: string;
}

export type LeadType = 'demo' | 'contact' | 'audit';

export interface NewsletterSignup {
  email: string;
  country?: string;
  topics?: string[];
}
