import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <h1>Desde Layout JSX</h1>

        {/* <p>Antes del Outlet</p> */}
        {/* Outlet - injecta el contendio del componente hijo */}
        <Outlet />
        {/* <p>Despues del Outlet</p> */}
    </div>
  )
}

export default Layout