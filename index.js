import express from "express";
import cors from "cors";
import { conectarBancoDeDados } from './db.js';
const PORT = 3000

async function run() {
    const app = express();
    app.use(cors());
    app.use(express.json());

    await conectarBancoDeDados();

    app.get("/", function (req, res) {
        res.send("API Betnget");
    })

    app.listen(PORT, function() {
        console.log("API rodando na porta: " + PORT);
    })
}

run();