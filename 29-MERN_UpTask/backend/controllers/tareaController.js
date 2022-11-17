import mongoose from "mongoose"
// Importar models
import Proyecto from "../models/Proyecto.js"
import Tarea from "../models/Tarea.js"

const agregarTarea = async (req, res) => {
    // console.log(req.body)
    const { proyecto } = req.body
    console.log(proyecto)
    // Validar el ID proyecto en moogose
    if (!mongoose.Types.ObjectId.isValid(proyecto)) {
        const error = new Error('ID proyecto invalido')
        return res.status(404).json({ msg: error.message })
    }

    const existeProyecto = await Proyecto.findById(proyecto)
    // console.log(existeProyecto)
    // Validar que el proyecto exista
    if (!existeProyecto) {
        const error = new Error('El Proyecto no existe')
        return res.status(404).json({ msg: error.message })
    }

    // Validar que el creado del proyecto sea igual al usuario autenticado
    if(existeProyecto.creador.toString() !== req.usuario._id.toString()) {
        const error = new Error('No tienes los permisos para añadir tareas')
        return res.status(404).json({ msg: error.message })
    }

    try {
        const tareaAlmacenada = await Tarea.create(req.body)
        return res.json(tareaAlmacenada)
    } catch (error) {
        console.log(error)
    }
}

const obtenerTarea = async (req, res) => {}

const actualizarTarea = async (req, res) => {}

const eliminarTarea = async (req, res) => {}

const cambiarEstado = async (req, res) => {}

export {
    agregarTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstado,
}