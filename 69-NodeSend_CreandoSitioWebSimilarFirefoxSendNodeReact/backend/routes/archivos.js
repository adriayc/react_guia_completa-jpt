const express = require('express');
const router = express.Router();
// Middlewate
const auth = require('../middleware/auth');
// Controllers
const archivosController = require('../controllers/archivosController');

router.post('/',
    archivosController.subirArchivo
);

router.delete('/:id',
    archivosController.eliminarArchivo
);

module.exports = router;