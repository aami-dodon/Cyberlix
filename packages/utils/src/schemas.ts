import {
  ApiError,
  CaseStudy,
  ContactRequest,
  DemoRequest,
  LeadRecord,
  NewsletterSignup,
  ProductCard,
  ProductId,
  ServiceId,
  ServiceItem,
} from '@cynalitx/types';
import { z } from 'zod';

export const productIds: readonly ProductId[] = ['cynaguard-grc', 'apertia-ai'] as const;
export const serviceIds: readonly ServiceId[] = [
  'managed-soc',
  'vapt',
  'cloud-security',
  'grc-consulting',
  'ai-governance',
  'incident-response',
] as const;

const productIdEnum = z.enum([...productIds] as [ProductId, ...ProductId[]]);
const serviceIdEnum = z.enum([...serviceIds] as [ServiceId, ...ServiceId[]]);

export const productCardSchema = z.object({
  id: productIdEnum,
  name: z.string(),
  tagline: z.string(),
  summary: z.string(),
  benefits: z.array(z.string()),
  cta: z.enum(['demo', 'learn']),
}) satisfies z.ZodType<ProductCard>;

export const serviceItemSchema = z.object({
  id: serviceIdEnum,
  name: z.string(),
  description: z.string(),
  outcomes: z.array(z.string()),
}) satisfies z.ZodType<ServiceItem>;

export const contactSchema = z
  .object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(7),
    company: z.string().min(2),
    role: z.string().min(2),
    country: z.string().min(2),
    message: z.string().max(600).optional(),
    interest: z.union([productIdEnum, serviceIdEnum]).optional(),
    source: z.string().optional(),
    captchaToken: z.string().min(1),
  })
  .strict() satisfies z.ZodType<ContactRequest>;

export const demoSchema = contactSchema.omit({ interest: true }).extend({
  productId: productIdEnum,
  preferredTime: z.string().optional(),
}) satisfies z.ZodType<DemoRequest>;

export const newsletterSchema = z
  .object({
    email: z.string().email(),
    country: z.string().optional(),
    topics: z.array(z.string()).optional(),
  })
  .strict() satisfies z.ZodType<NewsletterSignup>;

export const apiErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
  details: z.array(z.string()).optional(),
  traceId: z.string().optional(),
}) satisfies z.ZodType<ApiError>;

export const leadRecordSchema = z.object({
  id: z.string(),
  status: z.enum(['received', 'validated', 'routed']),
  createdAt: z.string(),
}) satisfies z.ZodType<LeadRecord>;

export const caseStudySchema = z.object({
  sector: z.string(),
  summary: z.string(),
  outcomes: z.array(z.string()),
  anonymous: z.boolean().optional(),
}) satisfies z.ZodType<CaseStudy>;
