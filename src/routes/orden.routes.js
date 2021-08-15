import { Router } from 'express';
const router = Router();
import * as ordenController from '../controllers/orden.controller';

router.get('/', ordenController.obtenerOrdenes)

router.get('/:id', ordenController.obtenerOrden)

router.post('/', ordenController.nuevaOrden)

router.put('/:id', ordenController.editarOrden)

router.delete('/:id', ordenController.eliminarOrden)

export default router;