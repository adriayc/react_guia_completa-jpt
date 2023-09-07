import React from 'react';
// Importar routing
import Link from 'next/link';
// Importar emotion
import styled from '@emotion/styled';

// Styles
const Nav = styled.nav`
  padding-left: 2rem;

  a {
    color: var(--gris2);
    font-size: 1.8rem;
    font-family: 'PT Sans', sans-serif;
    margin-left: 2rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Navegacion = () => {
  return (
    <Nav>
      <Link href='/'>Inicio</Link>
      <Link href='/'>Populares</Link>
      <Link href='/'>Nuevo Producto</Link>
    </Nav>
  );
}

export default Navegacion;