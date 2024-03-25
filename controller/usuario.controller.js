import express from 'express';
import mongoose from "mongoose";
import { buscarUsuarios } from '../service/usuario.service.js';
// app -> instância (objeto criado que veio do new) do Express
// router -> isntância do Express.Router

const usuarioController = express.Router(); // instancia um novo objeto do tipo express.Router

usuarioController.get("/", async function(req, res) {
    res.json(await buscarUsuarios());
});

usuarioController.get("/:id", async function(req, res){
    const UsuarioModel = mongoose.model("Usuario");
    const usuarioEncontrado = await UsuarioModel.findById(req.params.id);
    res.json(usuarioEncontrado);
});

usuarioController.post("/", async function(req, res) {
    const UsuarioModel = mongoose.model("Usuario");
    const resultado = await UsuarioModel.create(req.body);
    res.json(resultado);
})

usuarioController.put("/:id", async function(req, res) {
    const UsuarioModel = mongoose.model("Usuario");
    await UsuarioModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("Usuário atualizado com sucesso!");
});

usuarioController.delete("/:id", async function(req, res){
    const UsuarioModel = mongoose.model("Usuario");
    await UsuarioModel.findByIdAndDelete(req.params.id);
    res.send("Usuário removido com sucesso!");
});

export default usuarioController;