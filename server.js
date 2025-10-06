const express = require('express');
const comidaRoutes = require('./src/routes/comidaRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: '🍕 API de Comidas - MVC Edition',
    endpoints: {
      listar: 'GET /comidas',
      buscar: 'GET /comidas/:id',
      criar: 'POST /comidas',
      atualizar: 'PUT /comidas/:id',
      deletar: 'DELETE /comidas/:id'
    }
  });
});

app.use('/comidas', comidaRoutes);

app.listen(PORT, () => {
  console.log(`🍕 API em http://localhost:${PORT}`);
});