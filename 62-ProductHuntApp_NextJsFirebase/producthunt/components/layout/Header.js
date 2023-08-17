import React from 'react';
import Link from 'next/link';
// Impotar styled components
import styled from '@emotion/styled';
// Impotar emotion
import { css } from '@emotion/react'; 
// Impotar components
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';

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
  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gris3);
        padding: 1rem 0;
      `}
    >
      <ContenedorHeader>
        <div>
          <Link href='/'>
            <LogoParrafo>P</LogoParrafo>
          </Link>

          <Buscar />

          <Navegacion />
        </div>

        <div>
          <div>
            <p>Hola: Adriano</p>

            <button type='button'>Cerrar Sesión</button>

            <Link href='#'>Login</Link>
            <Link href='#'>Crear Cuenta</Link>
          </div>
        </div>
      </ContenedorHeader>
    </header>
  )
};

export default Header;