import React from 'react';
// Impotar layout component
import Layout from '../components/layouts/Layout';

const CrearCuenta = () => {
  return (
    <div>
      <Layout>
        <>
          <h1>Crear Cuenta</h1>

          <form>
            <div>
              <label htmlFor='nombre'>Nombre</label>
              <input
                type='text'
                id='nombre'
                name='nombre'
                placeholder='Tu Nombre'
              />
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Tu Email'
              />
            </div>

            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Tu Password'
              />
            </div>

            <input type='submit' value='Crear Cuenta' />
          </form>
        </>
      </Layout>
    </div>
  );
}

export default CrearCuenta;