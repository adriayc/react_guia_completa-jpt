import React from 'react';

const DetallesProducto = ({producto}) => {
  // console.log(producto);
  const { id, nombre, url, urlImagen, descripcion, empresa, votos, comentarios, creado  } = producto;

  return (
    <li>
      <div>
        <div>
          
        </div>

        <div>
          <h1>{nombre}</h1>
        </div>
      </div>

      <div>

      </div>
    </li>
  );
}

export default DetallesProducto;