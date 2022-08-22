import { createContext, useState } from 'react';

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  });

  const [error, setError] = useState('');

  const handleChangeDatos = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    // Establecer los nuevos valores a los datos (sin borrarlos el objeto previo)
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    // console.log('Cotizando...');

    // Una base

    // Obtener diferencia de años

    // Hay que restar el 3% por cada año

    // Europeo 30%
    // Americano 15%
    // Asiatico 5%
  };

  return (
    <CotizadorContext.Provider 
      // Hacer diponible variables o funciones al context
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro
      }}
    >
      {children}
    </CotizadorContext.Provider>
  ); 
};

export {
  CotizadorProvider
};
export default CotizadorContext;