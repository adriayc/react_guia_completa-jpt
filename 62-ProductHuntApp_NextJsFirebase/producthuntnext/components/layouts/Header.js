import React from 'react';
// Importar components
import Buscar from '../ui/Buscar';

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>

          {/* Buscador aqui */}
          <Buscar />

          {/* Nav aqui */}
        </div>

        <div>
          {/* Menu de administracion */}
        </div>
      </div>
    </header>
  );
}

export default Header;