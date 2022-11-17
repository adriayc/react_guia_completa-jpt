import mongoose from "mongoose"

const tareaSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    descripcion: {
        type: String,
        trim: true,
        required: true,
    },
    estado: {
        type: Boolean,
        default: false,
    },
    fechaEntrega: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    prioridad: {
        type: String,
        enum: ['Baja', 'Media', 'Alta'],
        require: true,
    },
    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyecto',
    }
}, {
    timestamp: true,
})

const Tarea = mongoose.model('Tarea', tareaSchema)
export default Tarea