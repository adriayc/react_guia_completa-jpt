// Import Hooks
import { useState, useEffect } from 'react';

const Formulario = () => {
    // Declaramos un state con un valor inicial (Debe estar dentro del componente)
    const [ nombre, setNombre ] = useState('');

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg text-center mt-5 mb-10">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Nombre Mascota</label>
                    <input 
                        type="text"
                        id="mascota" 
                        placeholder="Nombre de la Mascota" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        // onChange={() => console.log('Escribiendo...')} 
                        // onChange={(e) => console.log(e.target.value)} 
                        onChange={(e) => setNombre(e.target.value)} 
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">Nombre Propietario</label>
                    <input 
                        type="text"
                        id="propietario" 
                        placeholder="Nombre del Propietario" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 font-bold uppercase">Email</label>
                    <input 
                        type="email"
                        id="email" 
                        placeholder="Email Contacto Propietario" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">Alta</label>
                    <input 
                        type="date"
                        id="alta" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">Síntomas</label>
                    <textarea  
                        id="sintomas" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Síntomas"></textarea>
                </div>

                <input 
                    type="submit" 
                    className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all" 
                    value="Agregar Paciente" />
            </form>
        </div>
    )
}

export default Formulario
