import React from 'react';
// Importar emotion
// import { css } from '@emotion/core';
import { css } from '@emotion/react';

const Error404 = () => {
  return (
    <h1
      css={css`
        text-align: center;
        margin-top: 5rem;
      `}
    // >Producto no existente</h1>
    >No se puede mostrar</h1>
  );
}

export default Error404;