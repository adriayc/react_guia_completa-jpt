import React from 'react';
// Impotar emotion
import styled from '@emotion/styled';
// import { css } from '@emotion/core';     // Deprecado!, (Old version)
import { css } from '@emotion/react';

// Styles
const InputText = styled.input`
  min-width: 300px;
  padding: 1rem;
  border: 1px solid var(--gris3)
`;

const ButtonSubmit = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: white;
  background-image: url('static/img/buscar.png');
  background-repeat: no-repeat;
  background-size: 4rem;
  border: none;
  display: block;
  position: absolute;
  top: 1px;
  right: 1rem;
  // Mover el contenido (texto) del button
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
      {/* <input type='text' /> */}
      <InputText 
        type='text'
        placeholder='Buscar Productos'
      />

      {/* <button type='submit'>Buscar</button> */}
      <ButtonSubmit type='submit'>Buscar</ButtonSubmit>
    </form>
  );
}

export default Buscar;