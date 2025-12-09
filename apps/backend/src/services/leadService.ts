import { ApiResponse, ContactRequest, DemoRequest } from '@cynalitx/types';
import { contactSchema, demoSchema, errorResponse, successResponse } from '@cynalitx/utils';

import { AnyLead, toLeadRecord } from '../entities/lead';
import { leadRepository } from '../repositories/leadRepository';

const generateId = () => `lead-${Math.random().toString(36).slice(2, 10)}`;

const persistLead = (lead: AnyLead) => {
  leadRepository.save(lead);
  return lead;
};

export const createContactLead = (
  payload: ContactRequest,
): ApiResponse<{ ticketId: string; slaHours: number }> => {
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const details = parsed.error.errors.map((err) => `${err.path.join('.')}: ${err.message}`);
    return errorResponse('Invalid contact payload', 'validation_error', details);
  }

  const lead = persistLead({
    ...parsed.data,
    id: generateId(),
    type: 'contact',
    createdAt: new Date().toISOString(),
  });
  const record = toLeadRecord(lead);
  return successResponse({ ticketId: record.id, slaHours: 24 });
};

export const createDemoLead = (
  payload: DemoRequest,
): ApiResponse<{ ticketId: string; slaHours: number }> => {
  const parsed = demoSchema.safeParse(payload);
  if (!parsed.success) {
    const details = parsed.error.errors.map((err) => `${err.path.join('.')}: ${err.message}`);
    return errorResponse('Invalid demo payload', 'validation_error', details);
  }

  const lead = persistLead({
    ...parsed.data,
    id: generateId(),
    type: 'demo',
    createdAt: new Date().toISOString(),
  });
  const record = toLeadRecord(lead);
  return successResponse({ ticketId: record.id, slaHours: 24 });
};

export const listLeads = () => leadRepository.all();
