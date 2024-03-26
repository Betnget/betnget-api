import express from 'express';
import { buscarUsuarios, buscaUsuarioPorId, cadastrarUsuario, atualizarUsuario, removerUsuario } from '../service/usuario.service.js';
// app -> instância (objeto criado que veio do new) do Express
// router -> isntância do Express.Router

console.log("Registrando o usuarioController...");

const usuarioController = express.Router(); // instancia um novo objeto do tipo express.Router

usuarioController.get("/", async function(req, res) {
    res.json(await buscarUsuarios());
});

usuarioController.get("/:id", async function(req, res){
    res.json(await buscaUsuarioPorId(req.params.id));
});

usuarioController.post("/", async function(req, res) {
    res.json(await cadastrarUsuario(req.body));
})

usuarioController.put("/:id", async function(req, res) {
    res.json(await atualizarUsuario(req.params.id, req.body));
});

usuarioController.delete("/:id", async function(req, res){
    res.send(await removerUsuario(req.params.id));
});

export default usuarioController;