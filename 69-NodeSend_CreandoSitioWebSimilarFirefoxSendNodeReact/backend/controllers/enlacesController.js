// Shortid
const shortid = require('shortid');
// Bcrypt
const bcrypt = require('bcrypt');
// Models
const Enlaces = require('../models/Enlace');

exports.nuevoEnlace = async (req, res, next) => {
    console.log('Desde nuevo enlace');

    // Revisar si hay errores

    // Crear un objeto de Enlace
    // console.log(req.body);
    const { nombre_original } = req.body;

    const enlace = new Enlaces();
    enlace.url = shortid.generate();
    enlace.nombre = shortid.generate();
    enlace.nombre_original = nombre_original;
    // console.log(enlace);

    // Si el usuario esta autenticado
    // console.log(req.usuario);
    if (req.usuario) {
        const { password, descargas } = req.body;

        // Asignar a enlace el numero de descargas
        if (descargas) {
            enlace.descargas = descargas;
        }
        // Asignar un password
        if (password) {
            const salt = await bcrypt.genSalt(10);
            // enlace.password = password;
            enlace.password = await bcrypt.hash(password, salt);
        }

        // Asignar el autor
        enlace.autor = req.usuario.id;
    }

    // Almacenar en la BD
    try {
        await enlace.save();
        // res.json({msg: `${enlace.url}`})
        // return next();
        return res.json({msg: `${enlace.url}`});
        next();
        
    } catch (error) {
        console.log(error);
    }

};