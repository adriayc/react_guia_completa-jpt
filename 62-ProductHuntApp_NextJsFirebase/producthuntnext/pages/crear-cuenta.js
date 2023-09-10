import React from 'react';
// Importar emotion
// import { css } from '@emotion/core';    // Deprecado! (Old version)
import { css } from '@emotion/react';
// Impotar custom hook
import useValidacion from '../hooks/useValidacion';
// Importar validaciones
import validarCrearCuenta from '../validacion/validarCrearCuenta';
// Impotar layout component
import Layout from '../components/layouts/Layout';
import { Formulario, GroupForm, InputSubmit } from '../components/ui/Formulario';

// Variables
const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
};

const CrearCuenta = () => {
  const { valores, errores, submitForm, handleChange, handleSubmit } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  function crearCuenta() {
    console.log('Creando cuenta...');
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
          >Crear Cuenta</h1>

          <Formulario
            onSubmit={handleSubmit}
            // Quitar la validacion de HTML
            noValidate
          >
            <GroupForm>
              <label htmlFor='nombre'>Nombre</label>
              <input
                type='text'
                id='nombre'
                name='nombre'
                placeholder='Tu Nombre'
                value={nombre}
                onChange={handleChange}
              />
            </GroupForm>

            <GroupForm>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Tu Email'
                value={email}
                onChange={handleChange}
              />
            </GroupForm>

            <GroupForm>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Tu Password'
                value={password}
                onChange={handleChange}
              />
            </GroupForm>

            <InputSubmit type='submit' value='Crear Cuenta' />
          </Formulario>
        </>
      </Layout>
    </div>
  );
}

export default CrearCuenta;