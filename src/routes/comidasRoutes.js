// src/routes/comidaRoutes.js
import { Router } from "express";
import * as comidaController from '../controllers/comidaController.js'

const router = Router();


router.get('/', comidaController.listarTodos);
router.get('/:id', comidaController.listarUm);


export default router;