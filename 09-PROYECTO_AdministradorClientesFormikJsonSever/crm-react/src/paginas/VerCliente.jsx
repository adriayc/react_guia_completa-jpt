import React from 'react';
import { useParams } from 'react-router-dom';

const VerCliente = () => {

  // Obtenemos un objeto con el valor del parametro id
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();
  console.log(id);

  
  return (
    <div>VerCliente</div>
  )
}

export default VerCliente;