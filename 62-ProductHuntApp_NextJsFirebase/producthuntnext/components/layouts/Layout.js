import React from 'react';
import Header from './Header';
// Importar components

const Layout = props => {
  return (
    <>
      <Header />

      <main>
        {props.children}
      </main>
    </>
  );
}

export default Layout;