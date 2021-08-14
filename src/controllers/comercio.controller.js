import Comercio from '../models/Comercio';
import mongoose from 'mongoose';

export const obtenerComercios = async (req, res) => {

    try {
        const comercios = await Comercio.find({}, {})
        console.log('Ver comercios');
        res.json(comercios);
    } catch (error) {
        console.error(error);
    }
}

export const obtenerComercio = async (req, res) => {

    console.log('detalle de comercio', req.params.id);
    try {
        const comercio = await Comercio.findOne({ _id: req.params.id });
        res.json(comercio);
    } catch (error) {
        res.status(400).json({message:'Error', err:error})
        console.error(error);
    }
}

export const nuevoComercio = async (req, res) => {

    try {
        const { nombreComercio, imagenComercio, horario, ubicacion } = req.body;

        const nuevoComercio = new Comercio({
            nombreComercio,
            imagenComercio,
            horario,
            ubicacion
        })

        const comercioGuardado = await nuevoComercio.save();
        console.log('Nuevo Comercio guardado: ');
        console.log(comercioGuardado);

        res.json(comercioGuardado);
    } catch (error) {
        res.status(401).json({message:'No se pudo guardar', err:error});
        console.error('No se pudo guardar', error);
    }
}

export const editarComercio = async (req, res) => {

    try {
        const comercioEditar = await Comercio.findOne({ _id: req.params.id });
        // Se asigna el nuevo valor solo si no es indefinido, de lo contrario permanece el mismo valor
        comercioEditar.nombreComercio = req.body.nombreComercio!==undefined ? req.body.nombreComercio : comercioEditar.nombreComercio;
        comercioEditar.imagenComercio = req.body.imagenComercio!==undefined ? req.body.imagenComercio : comercioEditar.imagenComercio;
        comercioEditar.horario = req.body.horario!==undefined ? req.body.horario : comercioEditar.horario;
        comercioEditar.ubicacion = req.body.ubicacion!==undefined ? req.body.ubicacion : comercioEditar.ubicacion;

        const comercioActualizado = await comercioEditar.save();
        console.log('Comercio editado', comercioActualizado);

        res.json(comercioActualizado);
    } catch (error) {
        res.status(402).json({ message: 'Error en actualizar: ', err: error })
        console.error('Error en actualizar: ', error);
    }

}

export const eliminarComercio = async (req, res) => {

    try {
        const comercioEliminar = await Categoria.findOne({ _id: req.params.id });
        const comercioEliminado = await Categoria.deleteOne({ _id: comercioEliminar._id });
        res.json(comercioEliminado);
    } catch (error) {
        res.status(403).json({ message: 'Error en eliminar: ', err: error });
        console.error('Error en eliminar: ', error);
    }

}