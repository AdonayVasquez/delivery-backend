import { Schema, model } from "mongoose";

const roleSchema = new Schema({
    name: String
}, {
    version:false
})

export default model("Role", roleSchema);