import mongoose from "mongoose";

const promocaoModel = mongoose.model("Promocao");

export function buscarPromocoes() {
  return promocaoModel.find({});
}

export function cadastrarPromocoes(promocao) {
  return promocaoModel.create(promocao);
}
