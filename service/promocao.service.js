import mongoose from "mongoose";

const promocaoModel = mongoose.model("Promocao");

export function buscarPromocoes() {
  return promocaoModel.find({});
}
