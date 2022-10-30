// CommonJS
// const express = require('express');

// Module (imports)
import express from 'express'
// Importar archivos propios (agregar su extension .js)
import conectarDB from './config/db.js'     // Importar la configuracion de conexion de la DB
// import prueba from './prueba.js'

const app = express()

// Llamar a la funcion de conexion a la DB
conectarDB()

// console.log('Desde index.js')

app.listen(4000, () => {
    console.log('Sevidor corriendo en el puerto 4000')
})