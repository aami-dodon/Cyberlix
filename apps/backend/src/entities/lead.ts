import { ContactRequest, DemoRequest, LeadRecord, LeadType } from '@cynalitx/types';

export interface Lead extends ContactRequest {
  id: string;
  type: LeadType;
  createdAt: string;
}

export interface DemoLead extends DemoRequest {
  id: string;
  type: LeadType;
  createdAt: string;
}

export type AnyLead = Lead | DemoLead;

export type LeadCreate = ContactRequest | DemoRequest;

export const toLeadRecord = (lead: AnyLead): LeadRecord => ({
  id: lead.id,
  status: 'received',
  createdAt: lead.createdAt,
});
