import express from "express"
// Importar el controllers
import { /*usuarios, crearUsuarios*/ registrar, autenticar, confirmar, olvidePassword, comprobarToken } from "../controllers/usuarioController.js"

const router = express.Router()

// router.get('/', usuarios)
// router.post('/', crearUsuarios)

// Autenticación, Registro y Confirmación de Usuarios
router.post('/', registrar)     // Crea un nuevo usuario
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmar)
router.post('/olvide-password', olvidePassword)
router.get('/olvide-password/:token', comprobarToken)

export default router