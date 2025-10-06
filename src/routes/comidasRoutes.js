// src/routes/comidaRoutes.js
const express = require('express');
const router = express.Router();
const comidaController = require('../controllers/comidaController');

router.get('/', comidaController.listarTodos);
router.get('/:id', comidaController.buscarPorId);
router.post('/', comidaController.criar);
router.put('/:id', comidaController.atualizar);
router.delete('/:id', comidaController.deletar);

module.exports = router;