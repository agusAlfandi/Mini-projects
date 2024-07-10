import { Router } from 'express';

import {
  createEvent,
  getEventById,
  getEvents,
  updateEvent,
} from '../controllers/event.controller';
import { replace, upload } from './multer';

const router = Router();

router.post('/create-event', upload.single('image'), createEvent);
router.get('/get-events', getEvents);
router.post('/update-event/:id', replace.single('image'), updateEvent);
router.get('/get-event/:id', getEventById);

export default router;
