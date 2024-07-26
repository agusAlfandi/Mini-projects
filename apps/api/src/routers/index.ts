import { Router } from 'express';
import auth from './auth.router';
import event from './event.router';
import review from './review.router';
import promo from './promo.router';

const router = Router();

router.use('/auth', auth);
router.use('/event', event);
router.use('/review', review);
router.use('/promo', promo);

export default router;
