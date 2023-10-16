const express = require('express');
const router = express.Router();
// Middlewate
const auth = require('../middleware/auth');
// Multer
const multer = require('multer');
// Controllers
const archivosController = require('../controllers/archivosController');

// Subida de archivos (Con multer)
const upload = multer({dest: './uploads/'});

router.post('/',
    upload.single('archivo'),
    archivosController.subirArchivo
);

router.delete('/:id',
    archivosController.eliminarArchivo
);

module.exports = router;