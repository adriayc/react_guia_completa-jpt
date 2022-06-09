import React from 'react';

// Importar los estilos css del spinner
import '../styles/Spinner.css';

const Spinner = () => {
  return (
    <div className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  )
}

export default Spinner;