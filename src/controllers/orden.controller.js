import Orden from '../models/Orden';
import mongoose from 'mongoose';

export const obtenerOrdenes = async (req, res) => {

    try {
        const ordenes = await Orden.find({}, {});
        console.log('Ver ordenes');
        res.json(ordenes);
    } catch (error) {
        console.error(error);
    }
}

export const obtenerOrden = async (req, res) => {

    console.log('Detalle de Orden', req.params.id);
    try {
        const orden = await Orden.findOne({ _id: req.params.id });
        res.json(orden);
    } catch (error) {
        res.status(400).json({message:'Error', err:error})
        console.error(error);
    }
}

export const nuevaOrden = async (req, res) => {

    try {
        const { fecha, estado, descripcion, metodoPago, direccion, productos, comercio, motorista, cliente  } = req.body;

        const nuevaOrden = new Orden({
            fecha,
            estado,
            descripcion,
            metodoPago,
            direccion,
            productos,
            comercio,
            motorista,
            cliente
        })

        const ordenGuardada = await nuevaOrden.save();
        console.log('Nuevo Producto guardado: ');
        console.log(ordenGuardada);

        res.json(ordenGuardada);
    } catch (error) {
        res.status(401).json({message:'No se pudo guardar', err:error});
        console.error('No se pudo guardar', error);
    }
}

export const editarOrden = async (req, res) => {

    try {
        const ordenEditar = await Orden.findOne({ _id: req.params.id });
        // Se asigna el nuevo valor solo si no es indefinido, de lo contrario permanece el mismo valor
        ordenEditar.fecha = req.body.fecha!==undefined ? req.body.fecha : ordenEditar.fecha;
        ordenEditar.estado = req.body.estado!==undefined ? req.body.estado : ordenEditar.estado;
        ordenEditar.descripcion = req.body.descripcion!==undefined ? req.body.descripcion : ordenEditar.descripcion;
        ordenEditar.metodoPago = req.body.metodoPago!==undefined ? req.body.metodoPago : ordenEditar.metodoPago;
        ordenEditar.direccion = req.body.direccion!==undefined ? req.body.direccion : ordenEditar.direccion;
        ordenEditar.productos = req.body.productos!==undefined ? req.body.productos : ordenEditar.productos;
        ordenEditar.comercio = req.body.comercio!==undefined ? req.body.comercio : ordenEditar.comercio;
        ordenEditar.motorista = req.body.motorista!==undefined ? req.body.motorista : ordenEditar.motorista;
        ordenEditar.cliente = req.body.cliente!==undefined ? req.body.cliente : ordenEditar.cliente;

        const ordenActualizada = await ordenEditar.save();
        console.log('orden editado correctamente', ordenActualizada);

        res.json(ordenActualizada);
    } catch (error) {
        res.status(402).json({ message: 'Error en actualizar: ', err: error })
        console.error('Error en actualizar: ', error);
    }

}

export const eliminarOrden = async (req, res) => {

    try {
        const ordenEliminar = await Orden.findOne({ _id: req.params.id });
        const ordenEliminada = await Orden.deleteOne({ _id: ordenEliminar._id });
        res.json(ordenEliminada);
    } catch (error) {
        res.status(403).json({ message: 'Error en eliminar: ', err: error });
        console.error('Error en eliminar: ', error);
    }

}