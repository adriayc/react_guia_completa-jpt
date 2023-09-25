import React, { useContext } from 'react';
// Importar components
import Buscar from '../ui/Buscar';
import Link from 'next/link';
// Impotar emotion
import styled from '@emotion/styled';
// import { css } from '@emotion/core';   // Deprecado! (Old version)
import { css } from '@emotion/react';
// Importar el contexts
import { FirebaseContext } from '../../firebase';
// Importar components
import Navegacion from './Navegacion';
import Boton from '../ui/Boton';

// Styles
const ContenedorHeader = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

// const LogoParagraph = styled.(Link)`      // Error! en agregar style component a un componente (Permitido en gatsbyjs)
// const LogoParagraph = styled.p`
const LogoParagraph = styled.a`
  color: var(--naranja);
  font-size: 4rem;
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  line-height: 0;
  margin-right: 2rem;
  cursor: pointer;
`;

const Header = () => {
  const { usuario, firebase } = useContext(FirebaseContext);
  // console.log(usuario);

  return (
    <header
      css={css`
        padding: 1rem 0;
        border-bottom: 2px solid var(--gris3);
      `}
    >
      <ContenedorHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {/* Insertar un style component dentro de un Link */}
          <Link href='/'>
            <LogoParagraph>P</LogoParagraph>
          </Link>

          {/* Buscador aqui */}
          <Buscar />

          {/* Nav aqui */}
          <Navegacion />
        </div>

        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {/* Menu de administracion */}
          {usuario ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >Hola: {usuario.displayName}</p>
    
              {/* <button type='button'>Cerrar Sesión</button> */}
              <Boton
                bgColor='true'
                onClick={() => firebase.cerrarSesion()}
              >Cerrar Sesión</Boton>
            </>
          ) : (
            <>
              {/* <Link href='/'>Login</Link> */}
              {/* <Link href='/'>Crear Cuenta</Link> */}
              <Link href='/login'>
                <Boton
                  bgColor='true'
                >Login</Boton>
              </Link>
              <Link href='/crear-cuenta'><Boton>Crear Cuenta</Boton></Link>
            </>
          )}
        </div>
      </ContenedorHeader>
    </header>
  );
}

export default Header;