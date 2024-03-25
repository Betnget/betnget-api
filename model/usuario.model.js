import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
});

export function getUsuarioModel() {
    return mongoose.model("Usuario", usuarioSchema);
}
