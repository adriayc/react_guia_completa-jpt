import React, { useContext } from 'react';
// Importar routing
import Link from 'next/link';
// Importar emotion
import styled from '@emotion/styled';
// Importar el contexts
import { FirebaseContext } from '../../firebase';

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
  const { usuario } = useContext(FirebaseContext);

  return (
    <Nav>
      <Link href='/'>
        <a>Inicio</a>
      </Link>
      <Link href='/populares'>
        <a>Populares</a>
      </Link>
      {/* <Link href='/nuevo-producto'>Nuevo Producto</Link> */}
      {usuario && (
        <Link href='/nuevo-producto'>
          <a>Nuevo Producto</a>
        </Link>
      )}
    </Nav>
  );
}

export default Navegacion;