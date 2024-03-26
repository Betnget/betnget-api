import mongoose from "mongoose";
import { getUsuarioModel } from "./model/usuario.model.js";

/**
 * Função responsável por realizar a conexão com o banco de dados MongoDB 
 * e registrar os modelos do Mongoose
 */
export async function conectarBancoDeDados() {
    console.log("Vai conectar com o banco de dados...");
    await mongoose.connect("mongodb+srv://betnget:betnget_mongodb@cluster0.fljwote.mongodb.net/betnget?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Conectou com o banco de dados...");

    console.log("Vai registrar os models...");
    console.log("Model Usuario...");
    getUsuarioModel();
    console.log("Model usuario registrado")
}