import { createPromo, getPromos } from '@/controllers/promo.controller';
import { Router } from 'express';

const router = Router();

router.post('/create-promo/:id', createPromo);
router.get('/get-promos/:id', getPromos);

export default router;
