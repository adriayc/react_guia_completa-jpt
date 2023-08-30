import React from 'react';
// Importar components
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>

          {/* Buscador aqui */}
          <Buscar />

          {/* Nav aqui */}
          <Navegacion />
        </div>

        <div>
          {/* Menu de administracion */}
          <p>Hola: Adriano</p>

          <button type='button'>Cerrar Sesión</button>

          <Link href='/'>Login</Link>
          <Link href='/'>Crear Cuenta</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;