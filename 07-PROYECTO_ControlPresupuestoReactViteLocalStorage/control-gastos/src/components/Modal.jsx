import React from 'react'

import CerrarModal from '../img/cerrar.svg';

const Modal = ({ setModal }) => {
  const ocultarModal = () => {
    //   console.log('Ocultando...');
    setModal(false);
  };

  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img 
                src={CerrarModal} 
                alt="Cerrar modal" 
                onClick={ocultarModal}
            />
        </div>
    </div>
  )
}

export default Modal