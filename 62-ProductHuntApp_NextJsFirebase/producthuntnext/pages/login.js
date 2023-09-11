import React, { useState } from 'react';
// Importar router
import Router from 'next/router';
// Importar emotion
// import { css } from '@emotion/core';    // Deprecado! (Old version)
import { css } from '@emotion/react';
// Impotar custom hook
import useValidacion from '../hooks/useValidacion';
// Importar validaciones
import validarIniciarSesion from '../validacion/validarIniciarSesion';
// Import firebase
import firebase from '../firebase';
// Impotar layout component
import Layout from '../components/layouts/Layout';
import { Formulario, GroupForm, InputSubmit ,Error } from '../components/ui/Formulario';

// Variables
const STATE_INICIAL = {
  email: '',
  password: ''
};

const Login = () => {
  const [error, guardarError] = useState(false);

  const { valores, errores, handleChange, handleBlur, handleSubmit } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    // console.log('Iniciando sesión...');

    try {
      await firebase.login(email, password);
      // Redirigir a la raiz '/'
      Router.push('/');

    } catch (error) {
      console.error('Hubo un error al autenticar el usuario', error.message);

      guardarError(error.message);
    }
  }

  return (
    <div>
      <Layout>
        <>
        <h1
          css={css`
            text-align: center;
            margin-top: 5rem;
          `}
        >Iniciar Sesión</h1>

        <Formulario
          onSubmit={handleSubmit}
          // Quitar la validacion de HTML
          noValidate
        >
          <GroupForm>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Tu Email'
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </GroupForm>
          {errores.email && <Error>{errores.email}</Error>}

          <GroupForm>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Tu Password'
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </GroupForm>
          {errores.password && <Error>{errores.password}</Error>}

          {/* Error de Firebase */}
          {error && <Error>{error}</Error>}

          <InputSubmit type='submit' value='Iniciar Sesión' />
        </Formulario>
        </>
      </Layout>
    </div>
  );
}

export default Login;