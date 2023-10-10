const express = require('express');
const router = express.Router();
// Express validator
const { check } = require('express-validator');
// Controllers
const authController = require('../controllers/authController');

router.post('/',
    [
        check('email', 'El email no es válido').isEmail(),
        check('password', 'El password no puede ser vacio').not().isEmpty()
    ],
    authController.autenticarUsuario
);

router.get('/',
    authController.usuarioAutenticado
)

module.exports = router;