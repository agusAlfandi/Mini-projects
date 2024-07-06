import { Router } from 'express';

import auth from './auth.router';
import event from './event.router';

const router = Router();

router.use('/auth', auth);
router.use('/event', event);

export default router;