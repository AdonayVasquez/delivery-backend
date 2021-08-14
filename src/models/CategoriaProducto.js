import { SchemaTypes, model, Schema } from "mongoose";

const categoriaProductoSchema = new Schema({
    nombreCategoria:{
        type: String,
        unique:true,
        required:true
    },
    imagenCategoria:{
        type: String
    }
    
});

export default model('CategoriaProducto', categoriaProductoSchema); 