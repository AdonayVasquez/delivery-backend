import { Schema, model, SchemaTypes } from "mongoose";

const ordenSchema = new Schema({
    fecha: {
        type:String
    },
    estado: {
        type:String
    },
    descripcion: {
        type:String
    },
    metodoPago: {
        type:String
    },
    direccion: {
        type:Array,
        "default":[]
    },
    productos: [{
        ref:"Producto",
        type:Schema.Types.ObjectId
    }],
    comercio: {
        ref:"Comercio",
        type:Schema.Types.ObjectId
    },
    motorista: {
        ref:"User",
        type:Schema.Types.ObjectId
    },
    cliente: {
        ref:"User",
        type:Schema.Types.ObjectId
    },

});

export default model('Orden', ordenSchema)