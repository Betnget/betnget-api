import mongoose from "mongoose";

const cupomSchema = mongoose.Schema({
  dataExpiracao: Date,
  limite: Number,
  desconto: Number,
  titulo: String,
});

export function getCupomModel() {
  return mongoose.model("Cupom", cupomSchema);
}
