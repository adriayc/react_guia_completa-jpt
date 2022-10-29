// CommonJS
const express = require('express');

const app = express()

console.log('Desde index.js')

app.listen(4000, () => {
    console.log('Sevidor corriendo en el puerto 4000')
})