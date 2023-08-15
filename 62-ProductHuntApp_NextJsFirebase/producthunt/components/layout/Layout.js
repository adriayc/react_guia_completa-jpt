import React from 'react';
// Importar routing
import Link from 'next/link';
// Importar components
import Header from './Header';

const Layout = props => {
  return (
    <>
      <Header />

      <main>
        {props.children}
      </main>
    </>
  )
};

export default Layout;