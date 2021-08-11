import { Router } from 'express';
const router = Router();
import * as authController from '../controllers/auth.controller';
import { validarJWT } from '../middlewares/validar-jwt';

router.post('/registro', authController.registro)

router.post('/ingreso', authController.ingreso)

router.get('/renew', validarJWT, authController.renovarToken)

export default router;