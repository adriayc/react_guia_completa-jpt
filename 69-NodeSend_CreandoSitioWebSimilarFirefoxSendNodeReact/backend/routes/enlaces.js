const express = require('express');
const router = express.Router();
// Express validator
const { check } = require('express-validator');
// Middlewate
const auth = require('../middleware/auth');
// Controllers
const enlacesController = require('../controllers/enlacesController');
const archivoController = require('../controllers/archivosController');

router.post('/',
    [
        check('nombre', 'Sube un archivo').not().isEmpty(),
        check('nombre_original', 'Sube un archivo').not().isEmpty()
    ],
    auth,
    enlacesController.nuevoEnlace
);

router.get('/',
  enlacesController.todosEnlaces
);

router.get('/:url',
    enlacesController.obtenerEnlace,
    // archivoController.eliminarArchivo
);

module.exports = router;
