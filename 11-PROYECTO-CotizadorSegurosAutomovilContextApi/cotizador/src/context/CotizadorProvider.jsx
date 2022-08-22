import { createContext, useState } from 'react';

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

  const [modal, setModal] = useState(false);

  const cambiarState = () => {
    setModal(!modal);
  };

  return (
    <CotizadorContext.Provider 
      // Hacer diponible variables o funciones al context
      value={{
        modal,
        // Pasar la funcion que modifica el state
        // setModal
        // Pasar una funcion que modifica el state
        cambiarState
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