// Multer
const multer = require('multer');
// ShortId
const shortid = require('shortid');
// File system
const fs = require('fs');
// Models
const Enlaces = require('../models/Enlace');

exports.subirArchivo = async (req, res, next) => {
    // console.log(req.file);

    // Configuarion de multer
    const configuracionMulter = {
        // 1 MB de limite
        // limits: { fileSize: 1000000 },
        // limits: { fileSize: 1024 * 1024 },
        limits: { fileSize: req.usuario ? 1024 * 1024 *10 : 1024 * 1024 },
        storage: fileStorage = multer.diskStorage({
            destination: (req, res, cb) => {
                cb(null, __dirname +'/../uploads');
            },
            filename: (req, file, cb) => {
                // const extension = file.mimetype.split('/')[1];
                const extension = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
                // cb(null, `${shortid.generate()}.${extension}`);
                cb(null, `${shortid.generate()}${extension}`);
            },
            // fileFilter: (req, file, cb) => {
            //     //  Evitar archivos PDF's
            //     if (file.mimetype === 'application/pdf') {
            //         return cb(null, true);
            //     }
            // },
        })
    };

    const upload = multer(configuracionMulter).single('archivo');

    upload(req, res, async (error) => {
        console.log(req.file);

        if (!error) {
            return res.json({archivo: req.file.filename});
        } else {
            console.log(error);
            return next();
        }
    });
};

exports.eliminarArchivo = async (req, res) => {
    // console.log('Desde eliminar archivo');
    // console.log(req.archivo);

    try {
        fs.unlinkSync(__dirname +`/../uploads/${req.archivo}`);
        console.log('Archivo eliminado');

    } catch (error) {
        console.log(error);
    }
};

// Descargar un archivo
exports.descargar = async (req, res, next) => {
  // console.log('Descargando...');
  // console.log(req.params.archivo);

  const { archivo } = req.params;
  // Obtener el enlace
  const enlace = await Enlaces.findOne({nombre: archivo});

  const archivoDescarga = __dirname +'/../uploads/'+ archivo;
  res.download(archivoDescarga);

  // Eliminar el archivo y la entrada de la DB
  const { descargas, nombre } = enlace;

  // Si la descarga es igual a 1, borrar la entrada y el archivo
  if (descargas === 1) {
      // console.log('Solo existe 1');
      // Eliminar el archivo
      req.archivo = nombre;

      // Eliminar la entrada de la db
      // await Enlaces.findOneAndRemove(req.params.url);      // Error!
      await Enlaces.findOneAndDelete(enlace.id);

      // Next - pasa al siguiente controlador "enlaceController.eliminarArchivo"
      next();

  } else {
      // console.log('Existe mas de 1');
      // Si la decarga es mayor a 1, restar menos 1
      enlace.descargas--;
      await enlace.save();
  }
};
