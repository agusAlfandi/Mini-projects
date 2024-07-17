import {
  getReviewByIdEvent,
  reviewEvent,
} from '@/controllers/review.controller';
import { Router } from 'express';

const router = Router();

router.post('/create-review/:id', reviewEvent);
router.get('/get-review/:id', getReviewByIdEvent);

export default router;
