import { createContext, useState } from 'react';

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  });

  const handleChangeDatos = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    // Establecer los nuevos valores a los datos (sin borrarlos el objeto previo)
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  return (
    <CotizadorContext.Provider 
      // Hacer diponible variables o funciones al context
      value={{
        datos,
        handleChangeDatos
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