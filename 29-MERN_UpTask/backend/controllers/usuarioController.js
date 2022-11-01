// Importar models
import Usuario from "../models/Usuario.js"
// Importar helpers
import generarId from "../helpers/generarId.js"

// // GET
// const usuarios = (req, res) => {
//     // res.send('Desde GET - API/USUARIOS')
//     res.json({ msg: 'Desde GET - API/USUARIOS' })
// }

// // POST
// const crearUsuarios = (req, res) => {
//     res.json({ msg: 'Creando usuario' })
// }

const registrar = async (req, res) => {
    // console.log(req)
    // console.log(req.body)

    // Evitar registros duplicados
    const { email } = req.body
    // const existeUsuario = await Usuario.findOne({ email: email })
    const existeUsuario = await Usuario.findOne({ email })
    // console.log(existeUsuario)

    if (existeUsuario) {
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({ msg: error.message })
    }

    try {
        const usuario = new Usuario(req.body)
        // console.log(usuario)
        usuario.token = generarId()
        const usuarioAlmacenado = await usuario.save()

        // res.json({ msg: 'Creando Usuario' })
        res.json(usuarioAlmacenado)
        
    } catch (error) {
        console.log(error)
    }
}

export {
    // usuarios,
    // crearUsuarios,

    registrar
}