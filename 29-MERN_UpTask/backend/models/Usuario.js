import mongoose from "mongoose"

// Creamos el schema
const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,     // Requediro
        trim: true,          // Borra los espacios del inicio y final
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,        // Unico
    },
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false,     // Valor por defecto
    }
}, 
{
    timestamps: true,       // Created y Updated
})

const Usuario = mongoose.model('Usuario', usuarioSchema)
export default Usuario