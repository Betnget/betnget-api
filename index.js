import express from "express";
import cors from "cors";
import { conectarBancoDeDados } from './db.js';
import usuarioController from "./controller/usuario.controller.js";
const PORT = 3000

/**
 * Função responsável por iniciar a API: 
 * Configura o CORS
 * Configura express.json()
 * Estabelece a conexão com banco de dados
 * Registra os controllers
 */
async function run() {
    const app = express(); // instancia um objeto Express
    app.use(cors()); // habilita o CORS para consumo da API
    app.use(express.json()); // habilita que a API leia requisições com body contendo JSON

    // Resgistrando os controllers
    app.use("/usuarios", usuarioController); // registro no express o usuárioController

    await conectarBancoDeDados(); // Estabelece a conexão com o banco de dado MongoDB (MongoDB Atlas)

    app.get("/", function(req, res) { // Endpoint GET raiz
        res.send("API Betnget");
    })

    app.listen(PORT, function() { // Incia a API na porta 3000
        console.log("API rodando na porta: " + PORT);
    });
}

run();