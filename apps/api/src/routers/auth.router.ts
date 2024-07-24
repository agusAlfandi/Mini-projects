import { Router } from 'express';
import { register, login } from '@/controllers/auth.controller';
import { jwtMiddleware } from '@/middleware/jwt.middleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);

export default router;
