import {
  getReviewByIdEvent,
  createReviewEvent,
} from '@/controllers/review.controller';
import { Router } from 'express';

const router = Router();

router.post('/create-review/:id', createReviewEvent);
router.get('/get-review/:id', getReviewByIdEvent);

export default router;
