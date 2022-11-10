import jwt from 'jsonwebtoken'
// Importar el modelo de usuario
import Usuario from '../models/Usuario.js';

const checkAuth = async (req, res, next) => {
    // console.log('Desde checkAuth.js')
    // console.log(req.headers.authorization)

    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            // console.log(token)

            // Verificar TOKEN
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // console.log(decoded)

            // Obtenemos al usuario (menos los campos del select)
            req.usuario = await Usuario.findById(decoded.id).select('-password -confirmado -token -createdAt -updatedAt -__v')
            // console.log(req.usuario)
            
            next()
        } catch (error) {
            // console.log(error)
            return res.status(404).json({ msg: 'Hubo un error' })
        }
    }

    if (!token) {
        const error = new Error('Token no válido')
        // return res.status(401).json({ msg: error.message })
        res.status(401).json({ msg: error.message })
    }

    next()
}

export default checkAuth