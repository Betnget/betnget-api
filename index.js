import express from "express";
import cors from "cors";
import { conectarBancoDeDados } from './db.js';
import mongoose from "mongoose";
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
        // Acessar o UsuarioModel
        const UsuarioModel = mongoose.model("Usuario"); // mongoose retorna o modelo já registrado
        const usuariosCadastrados = await UsuarioModel.find({}); // mongoose faz uma busca de todos os documentos na coleção 'usuarios'
        res.json(usuariosCadastrados);
    });

    app.get("/usuarios/:id", async function(req, res){
        const UsuarioModel = mongoose.model("Usuario");
        const usuarioEncontrado = await UsuarioModel.findById(req.params.id);
        res.json(usuarioEncontrado);
    });

    app.listen(PORT, function() { // Incia a API na porta 3000
        console.log("API rodando na porta: " + PORT);
    });
}

run();