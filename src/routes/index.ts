import express from "express";

import { 
  listagemTodosClientes,
  retornoCliente
} from "../controllers/Cliente";

const router = express.Router();

router.get('/clientes', listagemTodosClientes);
router.get('/cliente/:id', retornoCliente);

export default router;
