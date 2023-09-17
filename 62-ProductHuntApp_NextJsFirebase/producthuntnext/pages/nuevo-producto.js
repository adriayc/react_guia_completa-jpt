import React, { useContext, useState } from 'react';
// Importar router
import Router, { useRouter } from 'next/router';
// Importar emotion
// import { css } from '@emotion/core';    // Deprecado! (Old version)
import { css } from '@emotion/react';
// Impotar custom hook
import useValidacion from '../hooks/useValidacion';
// Importar validaciones
import validarCrearProducto from '../validacion/validarCrearProducto';
// Import firebase
import firebase, { FirebaseContext } from '../firebase';
// Importar componente FileUploader
import FileUploader from 'react-firebase-file-uploader';
// Impotar layout component
import Layout from '../components/layouts/Layout';
import { Formulario, GroupForm, InputSubmit ,Error } from '../components/ui/Formulario';

// Variables
const STATE_INICIAL = {
  nombre: '',
  empresa: '',
  // imagen: '',
  ulr: '',
  descripcion: ''
};

const NuevoProducto = () => {
  // State de la imagen
  const [nombreImagen, guardarNombreImage] = useState('');
  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlImagen, guardarUrlImagen] = useState('');

  const [error, guardarError] = useState(false);

  const { valores, errores, handleChange, handleBlur, handleSubmit } = useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto);

  // const { nombre, empresa, imagen, url, descripcion } = valores;
  const { nombre, empresa, url, descripcion } = valores;

  // Context con las operaciones crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  // Hook de routing para redirect
  const router =  useRouter();

  async function crearProducto() {
    // console.log('Creando producto...');

    // Si el usuario no esta autenticado redirigir al login
    if (!usuario) {
      return router.push('/');
    }

    // Crear el objeto de nuevo producto
    const producto = {
      nombre,
      empresa,
      url,
      urlImagen,
      descripcion,
      votos: 0,
      comentarios: [],
      creado: Date.now()
    };

    // Insertar en la base de datos
    firebase.db.collection('productos').add(producto);

    // Redirigir a la raiz del app
    return router.push('/');
  }

  // File uploaded Firebase
  const handleUploadStart = () => {
    guardarProgreso(0);
    guardarSubiendo(true);
  };

  const handleProgress = progreso => guardarProgreso({ progreso });
  
  const handleUploadError = error => {
    // console.log(error);
    guardarSubiendo(error);
  };

  const handleUploadSuccess = nombre => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombreImage(nombre);

    firebase
      // .storage()
      .storage
      .ref('productos')
      .child(nombre)
      .getDownloadURL()
      .then(url => {
        // console.log(url);
        guardarUrlImagen(url)
      });
  };

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Nuevo Producto</h1>

          <Formulario
            onSubmit={handleSubmit}
            noValidate
          >
            <fieldset>
              <legend>Información General</legend>
            
              <GroupForm>
                <label htmlFor='nombre'>Nombre</label>
                <input
                  type='text'
                  id='nombre'
                  name='nombre'
                  placeholder='Nombre Producto'
                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </GroupForm>
              {errores.nombre && <Error>{errores.nombre}</Error>}

              <GroupForm>
                <label htmlFor='empresa'>Empresa</label>
                <input
                  type='text'
                  id='empresa'
                  name='empresa'
                  placeholder='Nombre Empresa o Compañia'
                  value={empresa}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </GroupForm>
              {errores.empresa && <Error>{errores.empresa}</Error>}

              <GroupForm>
                <label htmlFor='imagen'>Imagen</label>
                <FileUploader
                  // type='file'
                  id='imagen'
                  name='imagen'
                  // value={imagen}
                  // onChange={handleChange}
                  // onBlur={handleBlur}

                  accept='image/*'    /* Imagens de cualquier tipo */
                  randomizeFilename
                  storageRef={firebase.storage.ref('productos')}
                  onUploadStart={handleUploadStart}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess}
                  onProgress={handleProgress}
                />
              </GroupForm>
              {/* {errores.imagen && <Error>{errores.imagen}</Error>} */}

              <GroupForm>
                <label htmlFor='url'>URL</label>
                <input
                  type='url'
                  id='url'
                  name='url'
                  placeholder='Url de tu Producto'
                  value={url}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </GroupForm>
              {errores.url && <Error>{errores.url}</Error>}
            </fieldset>

            <fieldset>
              <legend>Sobre tu Producto</legend>

              <GroupForm>
                <label htmlFor='descripcion'>Descripcion</label>
                <textarea
                  id='descripcion'
                  name='descripcion'
                  placeholder='Descripción de tu Producto'
                  value={descripcion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
              </GroupForm>
              {errores.descripcion && <Error>{errores.descripcion}</Error>}
            </fieldset>

            {error && <Error>{error}</Error>}

            <InputSubmit type='submit' value='Crear Producto' />
          </Formulario>
        </>
      </Layout>
    </div>
  );
}

export default NuevoProducto;