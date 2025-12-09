import { Request, Response } from 'express';

import { createContactLead, createDemoLead, listLeads } from '../services/leadService';

export const handleContact = (req: Request, res: Response) => {
  const result = createContactLead(req.body);
  const status = result.success ? 200 : 400;
  return res.status(status).json(result);
};

export const handleDemo = (req: Request, res: Response) => {
  const result = createDemoLead(req.body);
  const status = result.success ? 200 : 400;
  return res.status(status).json(result);
};

export const handleLeads = (_req: Request, res: Response) => {
  return res.json({ success: true, data: listLeads() });
};
