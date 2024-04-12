import mongoose from "mongoose";

const cupomModel = mongoose.model("Cupom");

export function buscarCupons() {
  return cupomModel.find({});
}

export function buscarCuponsPorId(id) {
  return cupomModel.findById(id);
}
