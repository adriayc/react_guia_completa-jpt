import React from 'react';
// Impotar routing
import Link from 'next/link';
// Impotar styled components
import styled from '@emotion/styled';

// Styled components
const Nav = styled.nav`
  padding-left: 2rem;

  a {
    color: var(--gris2);
    font-family: 'PT Sans', sans-serif;
    font-size: 1.8rem;
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
      <Link href='/populares'>Populares</Link>
      <Link href='/nuevo-producto'>Nuevo Producto</Link>
    </Nav>
  )
};

export default Navegacion;