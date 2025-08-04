const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo! Probando desde Express.js (Parte 4)');
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
