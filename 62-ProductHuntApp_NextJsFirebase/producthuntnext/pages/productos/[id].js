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
  const [comentario, guardarComentario] = useState({});

  // Obtener el id actual de la url
  const router = useRouter();
  const { query: { id } } = router;
   // console.log(router);
  // console.log(id);

  // Context de firebase
  const { usuario, firebase } = useContext(FirebaseContext);
  // console.log(usuario);

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
  // }, [id]);
}, [id, producto]);

  // if (error) return <Error404 />

  if (Object.keys(producto).length === 0) return 'Cargando...';

  const { nombre, url, urlImagen, descripcion, empresa, votos, comentarios, creado, creador, haVotado } = producto;

  // Administrar y validar los votos
  const votarProducto = () => {
    // console.log('Votando...');

    if (!usuario) {
      return router.push('/login');
    }

    // Obtener y sumar un nuevo voto
    const nuevoTotal = votos + 1;
    // console.log(nuevoTotal);

    // Verificar si el usuario actual ha votado
    if (haVotado.includes(usuario.uid)) return;


    // Guardar el ID del usuario que ha votado
    const nuevoHaVotado = [...haVotado, usuario.uid];

    // Actualizar en la BD
    firebase.db.collection('productos').doc(id).update({
      votos: nuevoTotal, 
      haVotado: nuevoHaVotado
    });

    // Actualizar en el state
    guardarProducto({
      ...producto,
      votos: nuevoTotal
    })
  };

  // Funcion para crear comentarios
  const comentarioChange = e => {
    guardarComentario({
      ...comentario,
      [e.target.name]: e.target.value
    })
  };

  const agregarComentario = e => {
    e.preventDefault();

    if (!usuario) {
      return router.push('/login');
    }

    // Informacion extra al comentario
    comentario.usuarioId = usuario.uid;
    comentario.usuarioNombre = usuario.displayName;

    // Tomar copia de comentario y agregarlo al arreglo
    const nuevoComentarios = [...comentarios, comentario];
    console.log(nuevoComentarios);

    // Actualizar la BD
    firebase.db.collection('productos').doc(id).update({
      comentarios: nuevoComentarios
    });

    // Actualizar el state
    guardarProducto({
      ...producto,
      comentarios: nuevoComentarios
    });
  };

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
              
              {usuario && (
                <>
                  <h2>Agrega tu comentario</h2>
                  <form
                    onSubmit={agregarComentario}
                  >
                    <GroupForm>
                      <input 
                        type='text'
                        name='mensaje' 
                        onChange={comentarioChange}
                      />
                    </GroupForm>

                    <InputSubmit type='submit' value='Agregar Comentario' />
                  </form>
                </>
              )}

              <h2
                css={css`
                  margin: 2rem 0;
                `}
              >Comentarios</h2>
              {comentarios.length === 0 ? 'Aún no hay comentario' : (
                <ul>
                  {comentarios.map((comentario, index) => (
                    <li
                      key={`${comentario.usuarioId}-${index}`}
                      css={css`
                        padding: 2rem;
                        border: 1px solid #e1e1e1;
                      `}
                    >
                      <p>{comentario.mensaje}</p>
                      <p>Escrito por: {''}
                        <span
                          css={css`
                            font-weight: bold;
                          `}
                        >{comentario.usuarioNombre}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              )}
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

                {usuario && (
                  <Boton
                    onClick={votarProducto}
                  >Votar</Boton>
                )}
              </div>
            </aside>
          </ContenedorProducto>
        </div>
      </>
    </Layout>
  );
}

export default Producto;