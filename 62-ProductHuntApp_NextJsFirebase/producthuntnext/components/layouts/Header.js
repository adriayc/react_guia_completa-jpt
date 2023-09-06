import React from 'react';
// Importar components
import Buscar from '../ui/Buscar';
import Link from 'next/link';
// Impotar emotion
import styled from '@emotion/styled';
// import { css } from '@emotion/core';   // Deprecado! (Old version)
import { css } from '@emotion/react';
// Importar components
import Navegacion from './Navegacion';

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
const LogoParagraph = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  line-height: 0;
  margin-right: 2rem;
  cursor: pointer;
`;

const Header = () => {
  return (
    <header
      css={css`
        padding: 1rem 0;
        border-bottom: 2px solid var(--gris3);
      `}
    >
      <ContenedorHeader>
        <div>
          {/* Insertar un style component dentro de un Link */}
          <Link href='/'>
            <LogoParagraph>P</LogoParagraph>
          </Link>

          {/* Buscador aqui */}
          <Buscar />

          {/* Nav aqui */}
          <Navegacion />
        </div>

        <div>
          {/* Menu de administracion */}
          <p>Hola: Adriano</p>

          <button type='button'>Cerrar Sesión</button>

          <Link href='/'>Login</Link>
          <Link href='/'>Crear Cuenta</Link>
        </div>
      </ContenedorHeader>
    </header>
  );
}

export default Header;