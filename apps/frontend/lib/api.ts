import { ApiResponse, ContactRequest, DemoRequest } from '@cynalitx/types';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

const request = async <T, P extends object>(path: string, payload: P): Promise<ApiResponse<T>> => {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as ApiResponse<T>;
  if (!data.success) {
    const message = data.error?.message ?? 'Request failed';
    throw new Error(message);
  }
  return data;
};

export const submitContact = (payload: ContactRequest) =>
  request<{ ticketId: string }, ContactRequest>('/contact', payload);
export const submitDemo = (payload: DemoRequest) =>
  request<{ ticketId: string }, DemoRequest>('/demo', payload);
