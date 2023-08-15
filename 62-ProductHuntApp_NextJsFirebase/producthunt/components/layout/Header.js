import React from 'react';
// Impotar components
import Buscar from '../ui/Buscar';

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>

          <Buscar />

          {/* Nav aqui */}
        </div>

        <div>
          {/* Menu de administracion */}
        </div>
      </div>
    </header>
  )
};

export default Header;