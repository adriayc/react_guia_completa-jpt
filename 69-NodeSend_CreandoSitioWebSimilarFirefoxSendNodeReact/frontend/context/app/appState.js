import React, { useReducer } from 'react';
// Contexts
import appContext from './appContext';
// Reducer
import appReducer from './appReducer';
// Types
import {
  MOSTRAR_ALERTA,
  LIMPIAR_ALERTA,
  SUBIR_ARCHIVO_EXITO,
  SUBIR_ARCHIVO_ERROR,
  CREAR_ENLACE_EXITO,
  CREAR_ENLACE_ERROR
} from '../../types';

const AppState = ({children}) => {
  return (
    <appContext.Provider
      value={{

      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;