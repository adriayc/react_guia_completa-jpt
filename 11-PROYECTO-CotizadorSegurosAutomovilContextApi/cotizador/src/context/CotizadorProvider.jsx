import { createContext, useState } from 'react';

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

  return (
    <CotizadorContext.Provider 
      // Hacer diponible variables o funciones al context
      value={{
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