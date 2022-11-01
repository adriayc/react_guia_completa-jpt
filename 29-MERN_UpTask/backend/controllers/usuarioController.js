// Importar models
import Usuario from "../models/Usuario.js"

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

    try {
        const usuario = new Usuario(req.body)
        // console.log(usuario)
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