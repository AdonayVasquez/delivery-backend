import CategoriaProducto from '../models/CategoriaProducto';
import mongoose from 'mongoose';

export const obtenerCategoriasProducto = async (req, res) => {

    try {
        const categoriasProd = await CategoriaProducto.find({}, {});
        console.log('Ver categoriaProductos');
        res.json(categoriasProd);
    } catch (error) {
        console.error(error);
    }
}

export const obtenerCategoriaProducto = async (req, res) => {

    console.log('Detalle de Categoria de Producto', req.params.id);
    try {
        const categoriaProd = await CategoriaProducto.findOne({ _id: req.params.id });
        res.json(categoriaProd);
    } catch (error) {
        res.status(400).json({message:'Error', err:error})
        console.error(error);
    }
}

export const nuevaCategoriaProducto = async (req, res) => {

    try {
        const { nombreCategoria, imagenCategoria } = req.body;

        const nuevaCategoriaProd = new CategoriaProducto({
            nombreCategoria,
            imagenCategoria,
        })

        const categoriaGuardada = await nuevaCategoriaProd.save();
        console.log('Nuevo categoria guardada: ');
        console.log(categoriaGuardada);

        res.json(categoriaGuardada);
    } catch (error) {
        res.status(401).json({message:'No se pudo guardar', err:error});
        console.error('No se pudo guardar', error);
    }
}

export const editarCategoriaProducto = async (req, res) => {

    try {
        const categoriaEditar = await CategoriaProducto.findOne({ _id: req.params.id });
        // Se asigna el nuevo valor solo si no es indefinido, de lo contrario permanece el mismo valor
        categoriaEditar.nombreCategoria = req.body.nombreCategoria!==undefined ? req.body.nombreCategoria : categoriaEditar.nombreCategoria;
        categoriaEditar.imagenCategoria = req.body.imagenCategoria!==undefined ? req.body.imagenCategoria : categoriaEditar.imagenCategoria;

        const categoriaEditada = await categoriaEditar.save();
        console.log('Categoria editada correctamente', categoriaEditada);

        res.json(categoriaEditada);
    } catch (error) {
        res.status(402).json({ message: 'Error en actualizar: ', err: error })
        console.error('Error en actualizar: ', error);
    }

}

export const eliminarCategoriaProducto = async (req, res) => {

    try {
        const categoriaEliminar = await CategoriaProducto.findOne({ _id: req.params.id });
        const categoriaEliminada = await CategoriaProducto.deleteOne({ _id: categoriaEliminar._id });
        res.json(categoriaEliminada);
    } catch (error) {
        res.status(403).json({ message: 'Error al eliminar: ', err: error });
        console.error('Error al eliminar: ', error);
    }

}