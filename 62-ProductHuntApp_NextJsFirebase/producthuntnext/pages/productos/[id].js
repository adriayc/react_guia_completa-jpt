import React, { useContext, useEffect, useState } from 'react';
// Importar routing
import { useRouter } from 'next/router';
// Importar el context de firebase
import { FirebaseContext } from '../../firebase';
// Impotar layout component
import Layout from '../../components/layouts/Layout';
// Importar date-fns
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
// Importar emotion
import styled from '@emotion/styled';
// import { css } from '@emotion/core'
import { css } from '@emotion/react'
// Importar components
import Error404 from '../../components/layouts/404';
import { GroupForm, InputSubmit } from '../../components/ui/Formulario';
import Boton from '../../components/ui/Boton';



const ContenedorProducto = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
`;

const Producto = () => {
  // State del componente
  const [producto, guardarProducto] = useState({});
  const [error, guardarError] = useState(false);

  // Obtener el id actual de la url
  const router = useRouter();
  const { query: { id } } = router;
   // console.log(router);
  // console.log(id);

  // Context de firebase
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (id) {
      // console.log('Existe un id:', id);

      const obtenerProducto = async () => {
        const productoQuery = await firebase.db.collection('productos').doc(id);
        const producto = await productoQuery.get();
        // console.log(producto.data());
        if (producto.exists) {
          // console.log('Existe el producto');
          guardarProducto(producto.data());
        } else {
          // console.log('No existe el producto');
          guardarError(true);
        }
      };

      obtenerProducto();

    }
  }, [id])

  // if (error) return <Error404 />

  if (Object.keys(producto).length === 0) return 'Cargando...';

  const { nombre, url, urlImagen, descripcion, empresa, votos, comentarios, creado, creador } = producto;

  return (
    <Layout>
      <>
        {error && <Error404 />}

        <div className='contenedor'>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >{nombre}</h1>

          <ContenedorProducto>
            <div>
              <p>Publicado hace: { formatDistanceToNow(new Date(creado), {locale: es}) }</p>
              <p>Por: {creador.nombre} de {empresa}</p>
              <img src={urlImagen} />
              <p>{descripcion}</p>
              
              <h2>Agrega tu comentario</h2>
              <form>
                <GroupForm>
                  <input 
                    type='text'
                    name='mensaje' 
                  />

                  <InputSubmit type='submit' value='Agregar Comentario' />
                </GroupForm>
              </form>

              <h2
                css={css`
                  margin: 2rem 0;
                `}
              >Comentarios</h2>
              {comentarios.map((comentario, index) => (
                <li
                  key={index}
                >
                  <p>{comentario.nombre}</p>
                  <p>Escrito por: {comentario.usuarioNombre}</p>
                </li>
              ))}
            </div>

            <aside>
              <Boton
                target='_blank'
                bgColor='true'
                href={url}
              >Visitar URL</Boton>

              <div
                css={css`
                  margin-top: 5rem;
                `}
              >
                <p
                  css={css`
                    text-align: center;
                  `}
                >{votos} Votos</p>

                <Boton>Votar</Boton>
              </div>
            </aside>
          </ContenedorProducto>
        </div>
      </>
    </Layout>
  );
}

export default Producto;