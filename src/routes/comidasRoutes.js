// src/routes/comidaRoutes.js
import { Router } from "express";
import * as comidaController from '../controllers/comidaController.js'

const router = Router();


router.get('/', comidaController.listarTodos);
router.get('/:id', comidaController.listarUm);
router.post("/", comidaController.criar);
router.delete("/:id", comidaController.deletar);
router.put("/:id", comidaController.atualizar);


export default router;