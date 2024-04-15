import express from "express";
import {
  buscarCupons,
  buscarCuponsPorId,
  cadastrarCupons,
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
export default cupomController;
