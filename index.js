import express from "express";
import cors from "cors";
import { conectarBancoDeDados } from './db.js';
import mongoose from "mongoose";
import { buscarUsuarios } from "./service/usuario.service.js";
const PORT = 3000

/**
 * Função responsável por iniciar a API: 
 * Configura o CORS
 * Configura express.json()
 * Estabelece a conexão com banco de dados
 * Registra os endpoints
 */
async function run() {
    const app = express();
    app.use(cors()); // habilita o CORS para consumo da API
    app.use(express.json()); // habilita que a API leia requisições com body contendo JSON

    await conectarBancoDeDados(); // Estabelece a conexão com o banco de dado MongoDB (MongoDB Atlas)

    app.get("/", function(req, res) { // Endpoint GET raiz
        res.send("API Betnget");
    })

    app.get("/usuarios", async function(req, res) {
        res.json(await buscarUsuarios());
    });

    app.get("/usuarios/:id", async function(req, res){
        const UsuarioModel = mongoose.model("Usuario");
        const usuarioEncontrado = await UsuarioModel.findById(req.params.id);
        res.json(usuarioEncontrado);
    });

    app.post("/usuarios", async function(req, res) {
        const UsuarioModel = mongoose.model("Usuario");
        const resultado = await UsuarioModel.create(req.body);
        res.json(resultado);
    })

    app.put("/usuarios/:id", async function(req, res) {
        const UsuarioModel = mongoose.model("Usuario");
        await UsuarioModel.findByIdAndUpdate(req.params.id, req.body);
        res.send("Usuário atualizado com sucesso!");
    });

    app.delete("/usuarios/:id", async function(req, res){
        const UsuarioModel = mongoose.model("Usuario");
        await UsuarioModel.findByIdAndDelete(req.params.id);
        res.send("Usuário removido com sucesso!");
    });

    app.listen(PORT, function() { // Incia a API na porta 3000
        console.log("API rodando na porta: " + PORT);
    });
}

run();