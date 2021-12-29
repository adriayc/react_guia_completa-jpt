// Import Hooks
import { useState, useEffect } from 'react';

const Formulario = () => {
    // Declaramos un state con un valor inicial (Debe estar dentro del componente)
    const [ nombre, setNombre ] = useState('');
    const [ propietario, setPropietario ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ fecha, setFecha ] = useState('');
    const [ sintomas, setSintomas ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Enviando el formulario...');

        // Validacion del Formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('Ha al menos un campo vacio');
        } else {
            console.log('Todos llenos');
        }
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg text-center mt-5 mb-10">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

            <form 
                onSubmit={ handleSubmit } 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)} 
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 font-bold uppercase">Email</label>
                    <input 
                        type="email"
                        id="email" 
                        placeholder="Email Contacto Propietario" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">Alta</label>
                    <input 
                        type="date"
                        id="alta" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)} 
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">Síntomas</label>
                    <textarea  
                        id="sintomas" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Síntomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)} 
                    ></textarea>
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
