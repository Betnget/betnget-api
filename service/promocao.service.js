import mongoose from "mongoose";

const promocaoModel = mongoose.model("Promocao");

export function buscarPromocoes() {
  return promocaoModel.find({});
}

export function buscarPromocoesPorId(id) {
  return promocaoModel.findById(id);
}

export function cadastrarPromocoes(promocao) {
  return promocaoModel.create(promocao);
}

export function atualizarPromocoes(id, promocao) {
  return promocaoModel.findByIdAndUpdate(id, promocao, { new: true });
}
export function removerPromocao(id) {
  return promocaoModel.findByIdAndDelete(id);
}
