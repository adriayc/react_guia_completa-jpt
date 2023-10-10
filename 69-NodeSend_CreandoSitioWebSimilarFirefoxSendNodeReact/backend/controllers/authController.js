// Bcrypt
const bcrypt = require('bcrypt');
// Models
const Usuario = require('../models/Usuario');

exports.autenticarUsuario = async (req, res, next) => {
    // Revisar si hay errores

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
        // Crear JWT

    } else {
        // console.log('El password es incorrecto');
        // res.status(401).json({msg: 'El password es incorrecto'});
        // return next();
        return res.status(401).json({msg: 'El password es incorrecto'});
    }

};

exports.usuarioAutenticado = (req, res) => {

};