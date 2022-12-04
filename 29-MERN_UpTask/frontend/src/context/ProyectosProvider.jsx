import { useEffect, useState, createContext } from 'react' 
// Importar settings
import clienteAxios from '../config/clienteAxios'

const ProyectosContext = createContext()

const ProyectosProvider = ({children}) => {
    return (
      <ProyectosContext.Provider
        value={{

        }}
      >
        {children}
      </ProyectosContext.Provider>
    )
}

export {
  ProyectosProvider
}
export default ProyectosContext