import { Router } from 'express';
const router = Router();
import * as categoriaProductoController from '../controllers/categoria-producto.controller';

router.get('/', categoriaProductoController.obtenerCategoriasProducto)

router.get('/:id', categoriaProductoController.obtenerCategoriaProducto)

router.post('/', categoriaProductoController.nuevaCategoriaProducto)

router.put('/:id', categoriaProductoController.editarCategoriaProducto)

router.delete('/:id', categoriaProductoController.eliminarCategoriaProducto)

export default router;