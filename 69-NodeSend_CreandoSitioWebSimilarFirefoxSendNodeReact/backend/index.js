// Usando 'CommonJS' para la importacion
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');
// Middlewate
// const auth = require('./middleware/auth');

// Crear el servidor
const app = express();

// Habilitar el middleware
// app.use(auth);

// Conectar a la base de datos
conectarDB();

// Habilitar cors
// app.use(cors());    // Habilitacion de peticion publica
// Habilitar peticiones de una origin especifico
// console.log(process.env.FRONTEND_URL);
const opcionesCors = {
  origin: process.env.FRONTEND_URL
};
app.use(cors(opcionesCors));

console.log('Comensando con la app Node Send!');

// Puerto de la app
const port = process.env.PORT || 4000;

// Habilitar leer los valores de un body
app.use(express.json());

// Habilitar carpeta publica
app.use(express.static('uploads'));

// Rutas de la app
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/enlaces', require('./routes/enlaces'));
app.use('/api/archivos', require('./routes/archivos'));

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor es funcionado en el puerto ${port}`)
});
