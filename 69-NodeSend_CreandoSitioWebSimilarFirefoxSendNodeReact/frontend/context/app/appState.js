import React, { useReducer } from 'react';
// Contexts
import appContext from './appContext';
// Reducer
import appReducer from './appReducer';
// Types
import {
  MOSTRAR_ALERTA,
  // LIMPIAR_ALERTA,
  OCULTAR_ALERTA,
  SUBIR_ARCHIVO_EXITO,
  SUBIR_ARCHIVO_ERROR,
  CREAR_ENLACE_EXITO,
  CREAR_ENLACE_ERROR
} from '../../types';

const AppState = ({children}) => {
  const initialState = {
    mensaje_archivo: null,
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Mostrar una alerta
  const mostrarAlerta = msg => {
    // console.log(msg);

    dispatch({
      type: MOSTRAR_ALERTA,
      payload: msg
    });

    // Limpiar alerta
    setTimeout(() => {
      dispatch({
        // type: LIMPIAR_ALERTA,
        type: OCULTAR_ALERTA,
      })
    }, 3000);
  };

  return (
    <appContext.Provider
      value={{
        mensaje_archivo: state.mensaje_archivo,
        mostrarAlerta,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;