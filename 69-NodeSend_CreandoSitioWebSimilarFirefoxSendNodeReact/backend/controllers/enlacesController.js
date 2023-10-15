// Shortid
const shortid = require('shortid');
// Models
const Enlaces = require('../models/Enlace');

exports.nuevoEnlace = async (req, res, next) => {
    console.log('Desde nuevo enlace');

    // Revisar si hay errores

    // Crear un objeto de Enlace
    // console.log(req.body);
    const { nombre_original, password } = req.body;

    const enlace = new Enlaces();
    enlace.url = shortid.generate();
    enlace.nombre = shortid.generate();
    enlace.nombre_original = nombre_original;
    enlace.password = password;
    // console.log(enlace);

    // Si el usuario esta autenticado

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