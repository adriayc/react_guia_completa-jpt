// CommonJS
// const express = require('express');

// Module (imports)
import express from 'express'
// Importar archivos propios (agregar su extension .js)
import prueba from './prueba.js'

const app = express()

console.log('Desde index.js')

app.listen(4000, () => {
    console.log('Sevidor corriendo en el puerto 4000')
})