import request from 'supertest';

import { app } from '../app';

const basePayload = {
  name: 'Test User',
  email: 'test@cynalitx.com',
  phone: '+11234567890',
  company: 'Cynalitx',
  role: 'CISO',
  country: 'US',
  interest: 'cynaguard-grc',
  captchaToken: 'test-token',
};

describe('lead endpoints', () => {
  it('accepts a valid contact request', async () => {
    const res = await request(app).post('/api/contact').send(basePayload);
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.ticketId).toBeDefined();
  });

  it('validates missing captcha', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({ ...basePayload, captchaToken: '' });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.error.code).toBe('validation_error');
  });
});
