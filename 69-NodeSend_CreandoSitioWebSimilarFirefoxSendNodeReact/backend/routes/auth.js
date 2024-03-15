const express = require('express');
const router = express.Router();
// Express validator
const { check } = require('express-validator');
// Middlewate
const auth = require('../middleware/auth');
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
    // Usar el middleware solo donde sea necesario
    auth,
    authController.usuarioAutenticado
)

module.exports = router;