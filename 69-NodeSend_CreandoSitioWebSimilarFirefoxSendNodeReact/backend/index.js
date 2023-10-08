// Usando 'CommonJS' para la importacion
const express = require('express');
const conectarDB = require('./config/db');

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

console.log('Comensando con la app Node Send!');

// Puerto de la app
const port = process.env.PORT || 4000;

// Rutas de la app
app.use('/api/usuarios', require('./routes/usuarios'));

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor es funcionado en el puerto ${port}`)
});