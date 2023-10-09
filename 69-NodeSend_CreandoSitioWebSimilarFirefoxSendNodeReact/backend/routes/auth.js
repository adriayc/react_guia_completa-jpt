const express = require('express');
const router = express.Router();
// Express validator
const { check } = require('express-validator');
// Controllers
const authController = require('../controllers/authController');

router.post('/',
    authController.autenticarUsuario
);

router.get('/',
    authController.usuarioAutenticado
)

module.exports = router;