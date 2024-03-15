// Json web token
const jwt = require('jsonwebtoken');
// DotEnv
require('dotenv').config({ path: 'variables.env' });

module.exports = (req, res, next) => {
    // console.log('Yo soy un middleware');
    const authHeader = req.get('Authorization');

    if (authHeader) {
        // Obtener el token
        const token = authHeader.split(' ')[1];

        // Comprobar el JWT
        try {
            const usuario = jwt.verify(token, process.env.SECRETA);
            // console.log(usuario);
            // console.log('Desde middlewate', usuario);
    
            // return res.json({usuario});
            req.usuario = usuario;

        } catch (error) {
            console.log('JWT no válido');
            console.log(error);
        }
    }
    // console.log('No hay Header de authorizacion');

    return next();
};