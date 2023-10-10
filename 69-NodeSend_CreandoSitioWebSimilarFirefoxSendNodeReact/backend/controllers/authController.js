// Models
const Usuario = require('../models/Usuario');

exports.autenticarUsuario = async (req, res, next) => {
    // Revisar si hay errores

    // Buscar el usuario para ver si esta registrado
    // console.log(req.body);
    const { email } = req.body;
    const usuario = await Usuario.findOne({ email });
    // console.log(usuario);

    if (!usuario) {
        // res.status(401).json({msg: 'El usuario no existe'})
        // next();         // Evita ejecutar las siguientes lineas (Tambien: return next())
        return res.status(401).json({msg: 'El usuario no existe'});
    }

    // Verificar el password y autenticar el usuario
    console.log('El usuario si existe');

};

exports.usuarioAutenticado = (req, res) => {

};