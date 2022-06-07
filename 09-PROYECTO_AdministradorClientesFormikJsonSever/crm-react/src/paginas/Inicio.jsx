import { useState, useEffect } from 'react';

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

  return (
    <div>Desde Inicio JSX</div>
  )
}

export default Inicio