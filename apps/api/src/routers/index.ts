import { Router } from 'express';
import auth from './auth.router';
import event from './event.router';
import review from './review.router';

const router = Router();

router.use('/auth', auth);
router.use('/event', event);
router.use('/review', review);

export default router;
