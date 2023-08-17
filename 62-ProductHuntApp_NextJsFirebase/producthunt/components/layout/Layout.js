import React from 'react';
// Importar emotion
// import { Global, css } from '@emotion/core';   // Deprecado!
import { Global, css } from '@emotion/react'; 
// Importar routing
import Link from 'next/link';
// Importar head
import Head from 'next/head';
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
            --gris3: #e1e1e1;
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
            font-family: 'PT Sans', sans-serif;
            font-size: 1.6rem;    /* 16px */
            line-height: 1.5;
          }
          h1, h2, g3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          h1, h2 {
            font-family: 'Roboto Slab', serif;
            font-weight: 700;
          }
          h3 {
            font-family: 'PT Sans', sans-serif;
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

      <Head>
        <html lang="es" />
        <title>Product Hunt Firebase y Next.js</title>
        {/* Normalize */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        {/* Custom styles */}
        <link href='/static/css/app.css' rel={'stylesheet'} />
      </Head>

      <Header />

      <main>
        {props.children}
      </main>
    </>
  )
};

export default Layout;