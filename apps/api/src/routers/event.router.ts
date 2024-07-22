import { Request, Response, Router } from 'express';

import {
  createEvent,
  getEventByCategory,
  getEventById,
  getEventByLocation,
  getEvents,
  updateEvent,
} from '../controllers/event.controller';
import { upload } from './multer';

const router = Router();

router.post('/create-event', upload.single('image'), createEvent);
router.get('/get-events', getEvents);
router.post('/update-event/:id', updateEvent);
router.get('/get-event/:id', getEventById);
router.get('/get-by-lokasi/:location', getEventByLocation);
router.get('/get-by-category/:category', getEventByCategory);

export default router;
