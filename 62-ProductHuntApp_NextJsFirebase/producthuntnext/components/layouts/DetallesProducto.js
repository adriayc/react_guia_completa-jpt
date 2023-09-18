import React from 'react';
// Importar emotion
import styled from '@emotion/styled';
// Importar date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';


const Producto = styled.li`
  padding: 4rem;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DescripcionProducto = styled.div`
  flex: 0 1 600px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 2rem;
`;

const Imagen = styled.img`
  width: 200px;
`;

const Titulo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;

  :hover {
    cursor: pointer;
  }
`;

const TextoDescripcion = styled.p`
  color: #888;
  font-size: 1.6rem;
  margin: 0;
`;

const Comentarios = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;

  div {
    padding: .3rem 1rem;
    border: 1px solid #e1e1e1;
    margin-right: 2rem;
    display: flex;
    align-items: center;
  }
  img {
    width: 2rem;
    margin-right: 2rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 700;
    margin-right: 1rem;

    &:last-of-type {
      margin: 0;
    }
  }
`;

const Votos = styled.div`
  flex: 0 0 auto;
  text-align: center;
  padding: 1rem 3rem;
  border: 1px solid #e1e1e1;

  div {
    font-size: 2rem;
  }
  p {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }
`;

const DetallesProducto = ({producto}) => {
  // console.log(producto);
  const { id, nombre, url, urlImagen, descripcion, empresa, votos, comentarios, creado  } = producto;

  return (
    <Producto>
      <DescripcionProducto>
        <div>
          <Imagen src={urlImagen} />
        </div>

        <div>
          <Titulo>{nombre}</Titulo>

          <TextoDescripcion>{descripcion}</TextoDescripcion>

          <Comentarios>
            <div>
              <img src='/static/img/comentario.png' />
              <p>{comentarios.length} Comentarios</p>
            </div>
          </Comentarios>

          <p>Publicado hace: {formatDistanceToNow(new Date(creado), {locale: es})}</p>
        </div>
      </DescripcionProducto>

      <Votos>
        <div>&#9650;</div>
        <p>{votos}</p>
      </Votos>
    </Producto>
  );
}

export default DetallesProducto;