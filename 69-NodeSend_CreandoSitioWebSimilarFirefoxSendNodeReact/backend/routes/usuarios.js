const express = require('express');
const router = express.Router();
// Express validator
const { check } = require('express-validator');
// Controllers
const usuarioController = require('../controllers/usuarioController')

router.post('/',
    // Revisar la validacion antes de pasar controlador (express validator)
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email no es válido').isEmail(),
        check('password', 'El password debe ser al menos 6 caracteres').isLength({min: 6})
    ],
    usuarioController.nuevoUsuario
);

module.exports = router;