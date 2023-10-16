// Multer
const multer = require('multer');
// ShortId
const shortid = require('shortid');

// Configuarion de multer
const configuracionMulter = {
    // 1 MB de limite
    // limits: { fileSize: 1000000 },
    limits: { fileSize: 1024 * 1024 },
    storage: fileStorage = multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, __dirname +'/../uploads');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
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

exports.subirArchivo = async (req, res, next) => {
    // console.log(req.file);
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
    
};