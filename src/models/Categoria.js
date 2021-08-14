import { SchemaTypes, model, Schema } from "mongoose";

const categoriaSchema = new Schema({
    nombreCategoria:{
        type: String,
        unique:true,
        required:true
    },
    imagenCategoria:{
        type: String
    }
    
});

export default model('Categoria', categoriaSchema);