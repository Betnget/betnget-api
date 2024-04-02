import express from "express";
import {
  buscarPromocoes,
  cadastrarPromocoes,
} from "../service/promocao.service.js";

const promocaoController = express.Router();

promocaoController.get("/", async function (req, res) {
  res.json(await buscarPromocoes());
});

promocaoController.post("/", async function (req, res) {
  res.json(await cadastrarPromocoes(req.body));
});

export default promocaoController;
