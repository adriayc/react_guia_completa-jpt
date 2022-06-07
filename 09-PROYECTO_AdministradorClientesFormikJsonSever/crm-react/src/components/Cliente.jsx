import React from 'react';

const Cliente = ({ cliente }) => {
  return (
    <tr>
      <td>{cliente.nombre}</td>
    </tr>
  )
}

export default Cliente;