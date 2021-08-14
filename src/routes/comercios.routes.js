import { Router } from 'express';
const router = Router();
import * as comercioController from '../controllers/comercio.controller';

router.get('/', comercioController.obtenerComercios)

router.get('/:id', comercioController.obtenerComercio)

router.post('/', comercioController.nuevoComercio)

router.put('/:id', comercioController.editarComercio)

router.delete('/:id', comercioController.eliminarComercio)

export default router;