// Usando 'CommonJS' para la importacion
const express = require('express');
const conectarDB = require('./config/db');
// Middlewate
// const auth = require('./middleware/auth');

// Crear el servidor
const app = express();

// Habilitar el middleware
// app.use(auth);

// Conectar a la base de datos
conectarDB();

console.log('Comensando con la app Node Send!');

// Puerto de la app
const port = process.env.PORT || 4000;

// Habilitar leer los valores de un body
app.use(express.json());

// Rutas de la app
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/enlaces', require('./routes/enlaces'));

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor es funcionado en el puerto ${port}`)
});