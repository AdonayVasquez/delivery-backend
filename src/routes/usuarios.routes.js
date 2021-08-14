import { Router } from 'express';
const router = Router();
import * as usuarioController from '../controllers/usuario.controller';

router.get('/', usuarioController.obtenerUsuarios)

export default router;