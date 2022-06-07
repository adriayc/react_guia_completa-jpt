import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Importar componentes
import Spinner from '../components/Spinner';

const VerCliente = () => {

  const [cliente, setCliente] = useState({});
  // const [cargando, setCargando] = useState(false);
  const [cargando, setCargando] = useState(true);

  // Obtenemos un objeto con el valor del parametro id
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();
  console.log(id);

  // Se ejecuta solo una vez
  useEffect(() => {
    // Establecemos el opuesto al valor cargando
    // setCargando(!cargando);

    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);

        // Agregando el objeto cliente
        setCliente(resultado);

      } catch(error) {
        console.log(error);
      }

      // setCargando(false);
      // setTimeout(() => {
      //   setCargando(!cargando);
      // }, 3000);
      setCargando(!cargando);
    }

    // Llamar el metodo
    obtenerClienteAPI();

  }, []);
  // console.log(cargando);
  
  return (
    // cargando ? <p>Cargando...</p> : Object.keys(cliente).length === 0 ? <p>No Hay Resultados</p> : (
      cargando ? <Spinner /> : 
        Object.keys(cliente).length === 0 ? <p>No Hay Resultados</p> : 
          (
            <div>
              <h1 className='font-black text-4xl text-blue-900'>Ver Cliente: {cliente.nombre}</h1>
              <p className='mt-3'>Información del Cliente</p>
        
              {cliente.nombre && (
                <p className='text-4xl text-gray-600 mt-10'>
                  <span className='text-gray-800 uppercase font-bold'>Cliente: </span>{cliente.nombre}
                </p>
              )}
              {cliente.email && (
                <p className='text-2xl text-gray-600 mt-4'>
                  <span className='text-gray-800 uppercase font-bold'>Email: </span>{cliente.email}
                </p>
              )}
              {cliente.telefono && (
                <p className='text-2xl text-gray-600 mt-4'>
                  <span className='text-gray-800 uppercase font-bold'>Teléfono: </span>{cliente.telefono}
                </p>
              )}
              {cliente.empresa &&(
                <p className='text-2xl text-gray-600 mt-4'>
                  <span className='text-gray-800 uppercase font-bold'>Empresa: </span>{cliente.empresa}
                </p>
              )}
              {cliente.notas && (
                <p className='text-2xl text-gray-600 mt-4'>
                  <span className='text-gray-800 uppercase font-bold'>Notas: </span>{cliente.notas}
                </p>
              )}
            </div>
          )
  );
}

export default VerCliente;