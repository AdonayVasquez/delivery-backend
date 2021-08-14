import { Router } from 'express';
const router = Router();
import * as productoController from '../controllers/producto.controller';

router.get('/', productoController.obtenerProductos)

router.get('/:id', productoController.obtenerProducto)

router.post('/', productoController.nuevoProducto)

router.put('/:id', productoController.editarProducto)

router.delete('/:id', productoController.eliminarProducto)

export default router;