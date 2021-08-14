import Categoria from '../models/Categoria';
import mongoose from 'mongoose';

export const obtenerCategorias = async (req, res) => {

    try {
        const categorias = await Categoria.find({}, {})
        console.log('Ver categorias');
        res.json(categorias);
    } catch (error) {
        console.error(error);
    }
    // Forma anterior de hacerlo
    /* categoria.find({}, {})
    .then((data) => {
        res.send(data);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    }); */
}

export const obtenerCategoria = async (req, res) => {

    console.log('detalle de categoria', req.params.id);
    try {
        const categoria = await Categoria.findOne({ _id: req.params.id });
        res.json(categoria);
    } catch (error) {
        res.status(400).json({message:'Error', err:error})
        console.error(error);
    }
}

export const nuevaCategoria = async (req, res) => {

    try {
        const { nombreCategoria, imagenCategoria, comercios } = req.body;

        const nuevaCategoria = new Categoria({
            nombreCategoria,
            imagenCategoria,
            comercios,
        })

        const categoriaGuardada = await nuevaCategoria.save();
        console.log('Nueva categoria guardada: ');
        console.log(categoriaGuardada);

        res.json(categoriaGuardada);
    } catch (error) {
        res.status(401).json({message:'No se pudo guardar', err:error});
        console.error('No se pudo guardar', error);
    }
}

export const editarCategoria = async (req, res) => {

    try {
        const categoriaPut = await Categoria.findOne({ _id: req.params.id });
        // Se asigna el nuevo valor solo si no es indefinido, de lo contrario permanece el mismo valor
        categoriaPut.nombreCategoria = req.body.nombreCategoria!==undefined ? req.body.nombreCategoria : categoriaPut.nombreCategoria;
        categoriaPut.imagenCategoria = req.body.imagenCategoria!==undefined ? req.body.imagenCategoria : categoriaPut.imagenCategoria;

        const categoriaActualizada = await categoriaPut.save();
        console.log('Categoria editada', categoriaActualizada);

        res.json(categoriaActualizada);
    } catch (error) {
        res.status(402).json({ message: 'Error en actualizar', err: error })
        console.error('Error en actualizar', error);
    }

}

export const eliminarCategoria = async (req, res) => {

    try {
        const categoriaDelete = await Categoria.findOne({ _id: req.params.id });
        const categoriaEliminada = await Categoria.deleteOne({ _id: categoriaDelete._id });
        res.json(categoriaEliminada);
    } catch (error) {
        res.status(403).json({ message: 'Error en eliminar', err: error });
        console.error('Error en eliminar', error);
    }

}