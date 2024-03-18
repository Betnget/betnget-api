import mongoose from "mongoose";

export function buscarUsuarios() {
    const UsuarioModel = mongoose.model("Usuario");
    return UsuarioModel.find({});
}