import express from "express";
import {
  atualizarPromocoes,
  buscarPromocoes,
  buscarPromocoesPorId,
  cadastrarPromocoes,
  removerPromocao,
} from "../service/promocao.service.js";

const promocaoController = express.Router();

promocaoController.get("/", async function (req, res) {
  res.json(await buscarPromocoes());
});

promocaoController.get("/:id", async function (req, res) {
  res.json(await buscarPromocoesPorId(req.params.id));
});

promocaoController.post("/", async function (req, res) {
  res.json(await cadastrarPromocoes(req.body));
});

promocaoController.put("/:id", async function (req, res) {
  res.json(await atualizarPromocoes(req.params.id, req.body));
});

promocaoController.delete("/:id", async function (req, res) {
  res.json(await removerPromocao(req.params.id));
});

export default promocaoController;
