// CommonJS
// const express = require('express');

// Module (imports)
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// Importar archivos propios (agregar su extension .js)
import conectarDB from './config/db.js'     // Importar la configuracion de conexion de la DB
import usuarioRoutes from './routes/usuarioRoutes.js'
import proyectoRoutes from './routes/proyectoRoutes.js'
import tareaRoutes from './routes/tareaRoutes.js'
// import prueba from './prueba.js'

const app = express()
app.use(express.json())     // Habilitar la lectura o procesar JSON

// Llamar a la config de dotenv (Busca un archivo .env)
dotenv.config()

// Llamar a la funcion de conexion a la DB
conectarDB()

// Configurar CORS (Llamando al valor de la variable de entorno)
const whitelist = [process.env.FRONTEND_URL]     // Lista blanco (dominios permitidos)

const corsOptions = {
    origin: function (origin, callback) {
        // console.log(origin)
        if (whitelist.includes(origin)) {
            // Puede consultar la API
            callback(null, true)
        } else {
            // No esta permitido
            callback(new Error('Error de Cors'))
        }
    }
}

app.use(cors(corsOptions))

// Llamar a una variable de entorno
// console.log(process.env.HOLA)

// console.log('Desde index.js')

// Routing
// Solicitud HTTP GET
// app.get('/', (req, res) => {
//     res.send('Hola Mundo!')
// })
// Responde a todos los verbos HTTP
// app.use('/', (req, res) => {     // req: datos enviados y res: respuesta que recibe de la petición
//     // res.send('Hola Mundo!')
//     res.json({'msg': 'OK'})
// })
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/proyectos', proyectoRoutes)
app.use('/api/tareas', tareaRoutes)

const PORT = process.env.PORT || 4000       // La variable entorno PORT se inyectará automaticamente en prod y en local sera 4000

app.listen(PORT, () => {
    console.log(`Sevidor corriendo en el puerto ${PORT}`)
})