import express from "express";
import { buscarPromocoes } from "../service/promocao.service.js";

const promocaoController = express.Router();

promocaoController.get("/", async function (req, res) {
  res.json(await buscarPromocoes());
});

export default promocaoController;
