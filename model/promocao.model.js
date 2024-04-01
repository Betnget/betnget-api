import mongoose from "mongoose";

const promocaoSchema = mongoose.Schema({
  dataInicio: Date,
  dataFim: Date,
  ativo: Boolean,
  desconto: Number,
  limite: Number,
  titulo: String,
});

export function getPromocaoModel() {
  return mongoose.model("Promocao", promocaoSchema);
}
