import mongoose from "mongoose";

const cupomModel = mongoose.model("Cupom");

export function buscarCupons() {
  return cupomModel.find({});
}

export function buscarCuponsPorId(id) {
  return cupomModel.findById(id);
}
export function cadastrarCupons(cupom) {
  return cupomModel.create(cupom);
}
export function atualizarCupons(id, cupom) {
  return cupomModel.findByIdAndUpdate(id, cupom, { new: true });
}
