import { isFunction } from 'formik';
import { useState, useEffect } from 'react';

// Importar componentes
import Cliente from '../components/Cliente';

const Inicio = () => {

  const [clientes, setClientes] = useState([]);

  // Definimos un useEffect, [] array vacio para que se ejecute una sola vez
  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = 'http://localhost:4000/clientes';

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);

        setClientes(resultado);

      } catch(error) {
        console.log(error);
      }
    };

    // Llamar al funcion
    obtenerClienteAPI();
  }, []);

  // Metodo para eliminar un cliente
  const handleEliminar = async id => {
    // console.log('Eliminando...', id);

    const confirmar = confirm('¿Deseas eliminar este cliente?');
    // console.log(confirmar);

    if(confirmar) {
      try {
        const url = `http://localhost:4000/clientes/${id}`;

        // Fetch API tipo POST (Eliminar Datos)
        const respuesta = await fetch(url, {
          method: 'DELETE'
        });
        await respuesta.json();

        // Recargar la pagina
        // location.reload();        // Recarga la pagina (No es una solucion optima)

        // Filtar ID del cliente eliminado (La mejor solucion es actualizar el state)
        const arrayClientes = clientes.filter(cliente => cliente.id !== id);
        setClientes(arrayClientes);

      } catch(error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3'>Administra tus clientes</p>

      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='p-2'>Nombre</th>
            <th className='p-2'>Contactos</th>
            <th className='p-2'>Empresa</th>
            <th className='p-2'>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map(cliente => (
            <Cliente
              // Asignar un key unico
              key={cliente.id}
              cliente={cliente}
              handleEliminar={handleEliminar}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Inicio