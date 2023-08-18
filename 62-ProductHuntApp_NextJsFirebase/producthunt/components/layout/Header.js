import React from 'react';
import Link from 'next/link';
// Impotar styled components
import styled from '@emotion/styled';
// Impotar emotion
import { css } from '@emotion/react'; 
// Impotar components
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Boton from '../ui/Boton';

// Styled components
const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
const LogoParrafo = styled.p`
  color: var(--naranja);
  font-family: 'Roboto Slab', serif;
  font-size: 4rem;
  font-weight: 700;
  line-height: 0;
  margin-right: 2rem;
`;

const Header = () => {
  const usuario = false;

  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gris3);
        padding: 1rem 0;
      `}
    >
      <ContenedorHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href='/'>
            <LogoParrafo>P</LogoParrafo>
          </Link>

          <Buscar />

          <Navegacion />
        </div>

        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {usuario ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >Hola: Adriano</p>
  
              <Boton 
                type='button'
                bgColor='true'
              >Cerrar Sesión</Boton>
            </>
          ) : (
            <>
              {/* <Link href='#'> */}
                <Boton
                  type='button'
                  bgColor='true'
                >Login</Boton>
              {/* </Link> */}
              {/* <Link href='#'> */}
                <Boton
                  type='button'
                >Crear Cuenta</Boton>
              {/* </Link> */}
            </>
          )}
        </div>
      </ContenedorHeader>
    </header>
  )
};

export default Header;