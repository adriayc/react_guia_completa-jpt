// Bcrypt
const bcrypt = require('bcrypt');
// Json web token
const jwt = require('jsonwebtoken');
// Express validator
const { validationResult } = require('express-validator');
// DotEnv
require('dotenv').config({ path: 'variables.env' });
// Models
const Usuario = require('../models/Usuario');

exports.autenticarUsuario = async (req, res, next) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    // Buscar el usuario para ver si esta registrado
    // console.log(req.body);
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    // console.log(usuario);

    if (!usuario) {
        // res.status(401).json({msg: 'El usuario no existe'})
        // next();         // Evita ejecutar las siguientes lineas (Tambien: return next())
        return res.status(401).json({msg: 'El usuario no existe'});
    }

    // Verificar el password y autenticar el usuario
    // console.log('El usuario si existe');
    if (bcrypt.compareSync(password, usuario.password)) {
        // console.log('El password es correcto');
        // Crear JWT (Firma el token)
        const token = jwt.sign({
            id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email
        }, process.env.SECRETA, {
            expiresIn: '8h'
        });
        // console.log(token);
        return res.json({ token });

    } else {
        // console.log('El password es incorrecto');
        // res.status(401).json({msg: 'El password es incorrecto'});
        // return next();
        return res.status(401).json({msg: 'El password es incorrecto'});
    }

};

exports.usuarioAutenticado = (req, res, next) => {
    // console.log(req.get('Authorization'));
    const authHeader = req.get('Authorization');

    if (authHeader) {
        // Obtener el token
        const token = authHeader.split(' ')[1];

        // Comprobar el JWT
        try {
            const usuario = jwt.verify(token, process.env.SECRETA);
            // console.log(usuario);
    
            // return next();  
            return res.json({usuario});
        } catch (error) {
            console.log('JWT no válido');
            console.log(error);
        }
    }
    // console.log('No hay Header de authorizacion');

    // Finaliza y no permite que se ejecute el resto del codigo
    return next();
};