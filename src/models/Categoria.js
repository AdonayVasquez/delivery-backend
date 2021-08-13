import { SchemaTypes, model, Schema } from "mongoose";

const categoriaSchema = new Schema({
    nombreCategoria:{
        type: String,
        unique:true,
        required:true
    },
    imagenCategoria:{
        type: String,
        required:true
    },
    comercios: [{
        ref:"Comercio",
        type: Schema.Types.ObjectId
    }]
});

export default model('Categoria', categoriaSchema);