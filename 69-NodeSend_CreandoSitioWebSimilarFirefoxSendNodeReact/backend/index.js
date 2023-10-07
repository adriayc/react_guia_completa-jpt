// Usando 'CommonJS' para la importacion
const express = require('express');

// Crear el servidor
const app = express();

console.log('Comensando con la app Node Send!');

// Puerto de la app
const port = process.env.PORT || 4000;

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor es funcionado en el puerto ${port}`)
});