import { Router } from 'express';

import { health } from '../controllers/healthController';
import { handleContact, handleDemo, handleLeads } from '../controllers/leadController';

const router: ReturnType<typeof Router> = Router();

router.get('/health', health);
router.post('/contact', handleContact);
router.post('/demo', handleDemo);
router.get('/leads', handleLeads);

export { router };
