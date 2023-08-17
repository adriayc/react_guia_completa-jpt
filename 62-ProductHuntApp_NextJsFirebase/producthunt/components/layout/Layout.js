import React from 'react';
// Importar emotion
// import { Global, css } from '@emotion/core';   // Deprecado!
import { Global, css } from '@emotion/react'; 
// Importar routing
import Link from 'next/link';
// Importar components
import Header from './Header';

const Layout = props => {
  return (
    <>
      <Global
        styles = {css`
          :root {
            --gris: #3d3d3d;
            --gris2: #6f6f6f;
            --naranja: #da552f;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box
          }
          *, *::before, *::after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem;    /* 16px */
            line-height: 1.5;
          }
          h1, h2, g3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          a {
            text-decoration: none;
          }
        `}
      />

      <Header />

      <main>
        {props.children}
      </main>
    </>
  )
};

export default Layout;