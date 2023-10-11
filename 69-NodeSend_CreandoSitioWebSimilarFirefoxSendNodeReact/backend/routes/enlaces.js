const express = require('express');
const router = express.Router();
// Express validator
const { check } = require('express-validator');
// Middlewate
const auth = require('../middleware/auth');
// Controllers
const enlacesController = require('../controllers/enlacesController');

router.post('/',
    auth,
    enlacesController.nuevoEnlace
);

module.exports = router;