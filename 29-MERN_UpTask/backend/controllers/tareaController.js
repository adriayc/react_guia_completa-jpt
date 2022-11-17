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
        return res.status(403).json({ msg: error.message })
    }

    try {
        const tareaAlmacenada = await Tarea.create(req.body)
        return res.json(tareaAlmacenada)
    } catch (error) {
        console.log(error)
    }
}

const obtenerTarea = async (req, res) => {
    const { id } = req.params
    // console.log(id)

    // const tarea = await Tarea.findById(id)
    const tarea = await Tarea.findById(id).populate('proyecto')     // Obtener tarea poblado con el proyecto
    // console.log(tarea)

    if (!tarea) {
        const error = new Error('Tarea no encontrada')
        return res.status(404).json({ msg: error.message })     // 404 - cuando no se encuentra
    }

    // const { proyecto } = tarea

    // const existeProyecto = await Proyecto.findById(proyecto)
    // console.log(existeProyecto)

    if (tarea.proyecto.creador.toString() !== req.usuario._id.toString()) {
        const error = new Error('Acción no válida')
        return res.status(403).json({ msg: error.message })     // 403 - cuando no tiene permisos
    }

    return res.json(tarea)
}

const actualizarTarea = async (req, res) => {
    const { id } = req.params
    // console.log(id)

    const tarea = await Tarea.findById(id).populate('proyecto')
    // console.log(tarea)

    if (!tarea) {
        const error = new Error('Tarea no encontrada')
        return res.status(404).json({ msg: error.message })
    }

    if (tarea.proyecto.creador.toString() !== req.usuario._id.toString()) {
        const error = new Error('Acción no válida')
        return res.status(403).json({ msg: error.message })
    }

    // Actualizar
    tarea.nombre = req.body.nombre || tarea.nombre
    tarea.descripcion = req.body.descripcion || tarea.descripcion
    tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega
    tarea.prioridad = req.body.prioridad || tarea.prioridad

    try {
        const tareaAlmacenada = await tarea.save()
        return res.json(tareaAlmacenada)
    } catch (error) {
        console.log(error)
    }

}

const eliminarTarea = async (req, res) => {}

const cambiarEstado = async (req, res) => {}

export {
    agregarTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstado,
}