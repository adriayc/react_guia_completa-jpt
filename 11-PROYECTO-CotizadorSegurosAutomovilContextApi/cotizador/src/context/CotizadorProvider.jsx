import { createContext } from 'react';

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

  const hola = "Hola Mundo";

  const fnHolaMundo = () => {
    console.log('Hola Mundo desde una función');
  };

  return (
    <CotizadorContext.Provider 
      // Hacer diponible variables o funciones al context
      value={{
        // hola: hola
        hola,
        fnHolaMundo
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