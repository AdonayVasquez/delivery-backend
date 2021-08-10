import { Router } from 'express';
const router = Router();
import * as authController from '../controllers/auth.controller';

router.post('/registro', authController.registro)

router.post('/ingreso', authController.ingreso)

export default router;