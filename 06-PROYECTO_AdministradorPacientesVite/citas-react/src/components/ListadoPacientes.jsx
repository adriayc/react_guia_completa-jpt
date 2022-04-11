// import { useEffect } from 'react';
import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    // console.log(pacientes && pacientes.length === 0);

    // useEffect(() => {
    //     if(pacientes.length > 0) {
    //         console.log('Se agrego un nuevo paciente');
    //     }
    // }, [pacientes])

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            { pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''} 
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    {/* Al iterar los pacientes react necesita de un Key unico */}
                    { pacientes.map(paciente => (
                        // <h1>Desde map</h1>
                        // <h1>{ paciente.nombre }</h1>

                        <Paciente 
                            key={ paciente.id }
                            paciente={ paciente } 
                            setPaciente={ setPaciente }
                            eliminarPaciente={ eliminarPaciente }
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregado pacientes {''} 
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            ) }
        </div>
    )
}

export default ListadoPacientes
