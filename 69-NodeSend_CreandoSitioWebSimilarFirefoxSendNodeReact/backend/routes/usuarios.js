const express = require('express');
const router = express.Router();
// Controllers
const usuarioController = require('../controllers/usuarioController')

router.post('/',
    usuarioController.nuevoUsuario
);

module.exports = router;