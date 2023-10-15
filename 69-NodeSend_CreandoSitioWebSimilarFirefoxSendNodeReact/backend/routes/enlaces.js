const express = require('express');
const router = express.Router();
// Express validator
const { check } = require('express-validator');
// Middlewate
const auth = require('../middleware/auth');
// Controllers
const enlacesController = require('../controllers/enlacesController');

router.post('/',
    [
        check('nombre', 'Sube un archivo').not().isEmpty(),
        check('nombre_original', 'Sube un archivo').not().isEmpty()
    ],
    auth,
    enlacesController.nuevoEnlace
);

module.exports = router;