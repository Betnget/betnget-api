import mongoose from "mongoose";

/**
 * Função responsável por realizar a conexão com o banco de dados MongoDB
 */
export async function conectarBancoDeDados() {
    console.log("Vai conectar com o banco de dados...");
    await mongoose.connect("mongodb+srv://betnget:betnget_mongodb@cluster0.fljwote.mongodb.net/betnget?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Conectou com o banco de dados...");
}