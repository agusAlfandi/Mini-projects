import { Router } from 'express';

import { createEvent } from '../controllers/event.controller';

const router = Router();

router.post('/create-event', createEvent);

export default router;
