import express from "express";
import dotenv from "dotenv";
import comidasRoutes from './src/routes/comidasRoutes.js'

const app = express();

const serverPort = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: '🍕 API de Comidas - MVC Edition',
    endpoints: {
      listar: 'GET /comidas',
      buscar: 'GET /comidas/:id',
    }
  });
});

app.use('/comidas', comidasRoutes);

app.listen(serverPort, () => {
  console.log(`🍕 API em http://localhost:${serverPort}`);
});