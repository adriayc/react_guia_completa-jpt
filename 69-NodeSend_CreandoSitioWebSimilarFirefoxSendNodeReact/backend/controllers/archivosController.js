// Multer
const multer = require('multer');
// ShortId
const shortid = require('shortid');
// File system
const fs = require('fs');

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