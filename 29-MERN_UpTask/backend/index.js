// CommonJS
// const express = require('express');

// Module (imports)
import express from 'express'
import dotenv from 'dotenv'
// Importar archivos propios (agregar su extension .js)
import conectarDB from './config/db.js'     // Importar la configuracion de conexion de la DB
// import prueba from './prueba.js'

const app = express()

// Llamar a la config de dotenv (Busca un archivo .env)
dotenv.config()

// Llamar a la funcion de conexion a la DB
conectarDB()

// Llamar a una variable de entorno
// console.log(process.env.HOLA)

// console.log('Desde index.js')

const PORT = process.env.PORT || 4000       // La variable entorno PORT se inyectará automaticamente en prod y en local sera 4000

app.listen(PORT, () => {
    console.log(`Sevidor corriendo en el puerto ${PORT}`)
})