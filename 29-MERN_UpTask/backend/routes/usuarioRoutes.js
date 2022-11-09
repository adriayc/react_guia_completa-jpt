import express from "express"
// Importar el controllers
import { /*usuarios, crearUsuarios*/ registrar, autenticar, confirmar } from "../controllers/usuarioController.js"

const router = express.Router()

// router.get('/', usuarios)
// router.post('/', crearUsuarios)

// Autenticación, Registro y Confirmación de Usuarios
router.post('/', registrar)     // Crea un nuevo usuario
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmar)

export default router