import { SchemaTypes, model, Schema } from "mongoose";

const comercioSchema = new Schema({
    nombreComercio:{
        type: String,
        unique:true,
        required:true
    },
    imagenComercio:{
        type: String
    },
    horario: {
        type:String
    },
    ubicacion:{
        type:Array
    },
    categoria: {
        ref:"Categoria",
        type: Schema.Types.ObjectId
    },
    productos: [{
        ref:"Producto",
        type: Schema.Types.ObjectId
    }]

});

export default model('Comercio', comercioSchema);