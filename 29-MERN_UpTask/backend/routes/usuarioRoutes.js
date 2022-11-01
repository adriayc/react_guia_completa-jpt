import express from "express"
// Importar el controllers
import { /*usuarios, crearUsuarios*/ registrar } from "../controllers/usuarioController.js"

const router = express.Router()

// router.get('/', usuarios)
// router.post('/', crearUsuarios)

// Autenticación, Registro y Confirmación de Usuarios
router.post('/', registrar)     // Crea un nuevo usuario

export default router