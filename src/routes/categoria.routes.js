import { Router } from 'express';
const router = Router();
import * as categoriaController from '../controllers/categoria.controller';
import { validarJWT } from '../middlewares/validar-jwt';

router.get('/', categoriaController.obtenerCategorias)

router.get('/:id', categoriaController.obtenerCategoria)

router.post('/', categoriaController.nuevaCategoria)

router.put('/:id', categoriaController.editarCategoria)

router.delete('/:id', categoriaController.eliminarCategoria)

export default router;