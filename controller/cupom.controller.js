import express from "express";
import {
  atualizarCupons,
  buscarCupons,
  buscarCuponsPorId,
  cadastrarCupons,
  deletarCupons,
} from "../service/cupom.service.js";

const cupomController = express.Router();

cupomController.get("/", async function (req, res) {
  res.json(await buscarCupons());
});

cupomController.get("/:id", async function (req, res) {
  res.json(await buscarCuponsPorId(req.params.id));
});
cupomController.post("/", async function (req, res) {
  res.json(await cadastrarCupons(req.body));
});
cupomController.put("/:id", async function (req, res) {
  res.json(await atualizarCupons(req.params.id, req.body));
});
cupomController.delete("/:id", async function (req, res) {
  res.json(await deletarCupons(req.params.id));
});
export default cupomController;
