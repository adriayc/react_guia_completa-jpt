import express from "express"
// Importar el controllers
import { /*usuarios, crearUsuarios*/ registrar, autenticar } from "../controllers/usuarioController.js"

const router = express.Router()

// router.get('/', usuarios)
// router.post('/', crearUsuarios)

// Autenticación, Registro y Confirmación de Usuarios
router.post('/', registrar)     // Crea un nuevo usuario
router.post('/login', autenticar)

export default router