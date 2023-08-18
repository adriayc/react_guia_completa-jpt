import React from 'react';
// Impotar styled components
import styled from '@emotion/styled';
// Impotar emotion
import { css } from '@emotion/react'; 

// Styled component
const InputText = styled.input`
  min-width: 300px;
  padding: 1rem;
  border: 1px solid var(--gris3);
`;
const InputSubmit = styled.button `
  width: 3rem;
  height: 3rem;
  background-color: white;
  background-size: 4rem;
  background-image: url('/static/img/buscar.png');
  background-repeat: no-repeat;
  display: block;
  position: absolute;
  top: 1px;
  right: 1rem;
  border: none;
  // La propiedad text-indent especifica la sangría de la primera línea en un bloque de texto.
  text-indent: -9999px;

  &:hover {
    cursor: pointer;
  }
`;

const Buscar = () => {
  return (
    <form
      css={css`
        position: relative;
      `}
    >
      <InputText 
        type='text' 
        placeholder='Buscar Productos'
      />

      <InputSubmit type='submit'>Buscar</InputSubmit>
    </form>
  )
};

export default Buscar;