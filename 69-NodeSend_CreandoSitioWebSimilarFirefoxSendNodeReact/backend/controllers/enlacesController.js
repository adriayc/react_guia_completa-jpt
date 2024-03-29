// Shortid
const shortid = require('shortid');
// Bcrypt
const bcrypt = require('bcrypt');
// Express validator
const { validationResult } = require('express-validator');
// Models
const Enlaces = require('../models/Enlace');

exports.nuevoEnlace = async (req, res, next) => {
    // console.log('Desde nuevo enlace');

    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({msg: errores.array()});
    }

    // Crear un objeto de Enlace
    // console.log(req.body);
    const { nombre_original, nombre } = req.body;

    const enlace = new Enlaces();
    enlace.url = shortid.generate();
    enlace.nombre = nombre;
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

// Obtener todos los enlaces
exports.todosEnlaces = async (req, res) => {
  try {
    const enlaces = await Enlaces.find({}).select('url -_id');
    res.json({enlaces});

  } catch (error) {
    console.log(error);
  }
};

// Retornar si el enlace tiene password o no
exports.tienePassword = async (req, res, next) => {
  const { url } = req.params;
  // console.log(url);

  const enlace = await Enlaces.findOne({url});
  if (!enlace) {
    // return res.status(404).json({msg: 'El enlace no existe'});
    res.status(404).json({msg: 'El enlace no existe'});
    return next();
  }

  if (enlace.password) {
    return res.json({password: true, enlace: enlace.url});
  }

  // Si no existe password pasar el siguiente middleware
  next();
};

// Verificar si el password es correcto
exports.verificarPassword = async (req, res, next) => {
  // console.log('Verificando...');
  // console.log(req.params);
  // console.log(req.body);

  const { url } = req.params;
  const { password } = req.body;

  // Consultar por el enlace
  const enlace = await Enlaces.findOne({url});
  console.log(enlace);

  // Verificar el password
  if (bcrypt.compareSync(password, enlace.password)) {
    // Permitir al usuario descargar el archivo (Pasa al siguiente middleware)
    next();

  } else {
    return res.status(401).json({msg: 'Password incorrecto'});
  }
};

// Obtener el enlace
exports.obtenerEnlace = async (req, res, next) => {
    // console.log(req.params.url);
    const { url } = req.params;

    // Verificar si existe el enlace
    const enlace = await Enlaces.findOne({url});
    // console.log(enlace);
    if (!enlace) {
        // res.status(404).json({msg: 'El enlace no existe'});
        // return next();
        return res.status(404).json({msg: 'El enlace no existe'});
    }

    // El enlace existe
    // res.json({archivo: enlace.nombre});    // Respuesta como JSON
    return res.json({archivo: enlace.nombre, password: false});
    // res.send({archivo: enlace.nombre});     // Muestra un vista
    // res.download({archivo: enlace.nombre});   // Agrega el content-disposition para descarga de archivos
    // Evitar que se siga ejecutando el resto del codigo
    // return;
    // return next();

    // const { descargas, nombre } = enlace;
    //
    // // Si la descarga es igual a 1, borrar la entrada y el archivo
    // if (descargas === 1) {
    //     // console.log('Solo existe 1');
    //     // Eliminar el archivo
    //     req.archivo = nombre;
    //
    //     // Eliminar la entrada de la db
    //     // await Enlaces.findOneAndRemove(req.params.url);      // Error!
    //     await Enlaces.findOneAndDelete(req.params.url);
    //
    //     // Next - pasa al siguiente controlador "enlaceController.eliminarArchivo"
    //     next();
    //
    // } else {
    //     // console.log('Existe mas de 1');
    //     // Si la decarga es mayor a 1, restar menos 1
    //     enlace.descargas--;
    //     await enlace.save();
    // }
};
