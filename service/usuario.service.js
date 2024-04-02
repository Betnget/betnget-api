import mongoose from "mongoose";

const usuarioModel = mongoose.model("Usuario");

/**
 * Função responsável por buscar todos os usuários
 * utilizando o UsuarioModel proveniente do mongoose
 *
 * @returns {Array} vetor de usuários cadastrados
 */
export function buscarUsuarios() {
  return usuarioModel.find({});
}

/**
 * Função responsável por buscar um único usuário por ID
 * utilizando o UsuarioModel proveniente do mongoose
 *
 * @param {String} id - id do usuário a ser buscado
 * @returns {Object} usuário encontrado
 */
export function buscaUsuarioPorId(id) {
  return usuarioModel.findById(id);
}

/**
 * Função responsável por inserir um novo usuário no banco de dados
 * utilizando o UsuarioModel proveniente do mongoose
 *
 * @param {Object} usuario - objeto usuário a ser cadastrado
 * @returns {Object} objeto contendo o _id gerado pelo MongoDB
 */
export function cadastrarUsuario(usuario) {
  // validações no objeto usuario (senha com 8 digitos, no mínimo)
  return usuarioModel.create(usuario);
}

/**
 * Função responsável por atualizar um usuário no banco de dados pelo seu id
 * utilizando o UsuarioModel proveniente do mongoose
 *
 * @param {String} id - id do usuário a ser atualizado
 * @param {Object} usuario - objeto usuário a ser atualizado
 * @returns {Object} objeto do usuário atualizado
 */
export function atualizarUsuario(id, usuario) {
  return usuarioModel.findByIdAndUpdate(id, usuario, { new: true });
}

/**
 * Função responsável por remover um usuário do banco de dados pelo seu id
 * utilizando o UsuarioModel proveniente do mongoose
 *
 * @param {String} id - id do usuário a ser removido
 * @returns {Objeto} objeto do usuário que foi removido
 */
export function removerUsuario(id) {
  return usuarioModel.findByIdAndDelete(id);
}
