// Bcrypt
const bcrypt = require('bcrypt');
// Express validator
const { validationResult } = require('express-validator');
// Models
const Usuario = require("../models/Usuario");

exports.nuevoUsuario = async (req, res) => {
    // console.log('Desde nuevo usuarios');
    // console.log(req.body);

    // Mostrar mensajes de error de express validator
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    // Verificar si el usuario ya estuvo registrado
    const { email, password } = req.body;
    
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
        return res.status(400).json({msg: 'El usuario ya esta registrado'});
    }

    // Crear un nuevo usuario
    usuario = new Usuario(req.body);
    // console.log(usuario);

    // Hashear el password
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(password, salt);

    try {
        await usuario.save();

        // res.json({msg: 'Usuario creado correctamente'});
        return res.json({msg: 'Usuario creado correctamente'});

    } catch (error) {
        console.log(error);
    }
};