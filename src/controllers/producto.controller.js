import Producto from '../models/Producto';
import mongoose from 'mongoose';

export const obtenerProductos = async (req, res) => {

    try {
        const productos = await Producto.find({}, {});
        console.log('Ver productos');
        res.json(productos);
    } catch (error) {
        console.error(error);
    }
}

export const obtenerProducto = async (req, res) => {

    console.log('Detalle de Producto', req.params.id);
    try {
        const producto = await Producto.findOne({ _id: req.params.id });
        res.json(producto);
    } catch (error) {
        res.status(400).json({message:'Error', err:error})
        console.error(error);
    }
}

export const nuevoProducto = async (req, res) => {

    try {
        const { nombreProducto, imagenProducto, descripcion, precio } = req.body;

        const nuevoProducto = new Producto({
            nombreProducto,
            imagenProducto,
            descripcion,
            precio,
        })

        const productoGuardado = await nuevoProducto.save();
        console.log('Nuevo Producto guardado: ');
        console.log(productoGuardado);

        res.json(productoGuardado);
    } catch (error) {
        res.status(401).json({message:'No se pudo guardar', err:error});
        console.error('No se pudo guardar', error);
    }
}

export const editarProducto = async (req, res) => {

    try {
        const productoEditar = await Producto.findOne({ _id: req.params.id });
        // Se asigna el nuevo valor solo si no es indefinido, de lo contrario permanece el mismo valor
        productoEditar.nombreProducto = req.body.nombreProducto!==undefined ? req.body.nombreProducto : productoEditar.nombreProducto;
        productoEditar.imagenProducto = req.body.imagenProducto!==undefined ? req.body.imagenProducto : productoEditar.imagenProducto;
        productoEditar.descripcion = req.body.descripcion!==undefined ? req.body.descripcion : productoEditar.descripcion;
        productoEditar.precio = req.body.precio!==undefined ? req.body.precio : productoEditar.precio;

        const productoActualizado = await productoEditar.save();
        console.log('Producto editado correctamente', productoActualizado);

        res.json(productoActualizado);
    } catch (error) {
        res.status(402).json({ message: 'Error en actualizar: ', err: error })
        console.error('Error en actualizar: ', error);
    }

}

export const eliminarProducto = async (req, res) => {

    try {
        const productoEliminar = await Producto.findOne({ _id: req.params.id });
        const productoEliminado = await Producto.deleteOne({ _id: productoEliminar._id });
        res.json(productoEliminado);
    } catch (error) {
        res.status(403).json({ message: 'Error en eliminar: ', err: error });
        console.error('Error en eliminar: ', error);
    }

}