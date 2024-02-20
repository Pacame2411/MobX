const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Utiliza el puerto asignado por el entorno de despliegue o 3000 por defecto

app.use(express.static(path.join(__dirname, 'build'))); // Sirve los archivos estáticos de la carpeta build

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); // Sirve index.html para cualquier ruta
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
