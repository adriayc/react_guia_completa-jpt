import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Importar componentes
import Formulario from '../components/Formulario';

const EditarCliente = () => {

  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  // Se ejecuta una sola vez
  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        // const url  = `http://localhost:4000/clientes/${id}`;
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);

        // Cargar el objeto cliente a state
        setCliente(resultado);

      } catch(error) {
        console.log(error);
      }
      setCargando(!cargando);
    };

    // Llamar la funcion
    obtenerClienteAPI();
  }, []);

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>Utiliza este formulario para editar datos de un cliente</p>

      {/* { console.log(cliente?.nombre) } */}
      {/* {cliente?.nombre && (
        <Formulario
          cliente={cliente}
          cargando={cargando}
        />
      )} */}
      {cliente?.nombre ? (
        <Formulario
          cliente={cliente}
          cargando={cargando}
        />
      ) : <p>Cliente ID no válido</p>}
    </>
  )
}

export default EditarCliente;