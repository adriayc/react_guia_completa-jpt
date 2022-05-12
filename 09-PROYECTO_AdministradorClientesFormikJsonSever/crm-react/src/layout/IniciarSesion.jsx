import React from 'react';
import { Outlet } from 'react-router-dom';

const IniciarSesion = () => {
  return (
    <div>
        <h1>Desde Iniciar Sesion JSX</h1>

        {/* Outlet - injecta el contendio del componente hijo */}
        <Outlet />
    </div>
  )
}

export default IniciarSesion