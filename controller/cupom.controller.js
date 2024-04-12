import express from "express";
import { buscarCupons, buscarCuponsPorId } from "../service/cupom.servise.js";

const cupomController = express.Router();

cupomController.get("/", async function (req, res) {
  res.json(await buscarCupons());
});

cupomController.get("/:id", async function (req, res) {
  res.json(await buscarCuponsPorId(req.params.id));
});

export default cupomController;
