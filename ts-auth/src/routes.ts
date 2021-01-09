import { Router } from 'express';

import authMiddleware from './middlewares/authMiddleware';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);
router.get('/users', authMiddleware, UserController.index);

export default router;
