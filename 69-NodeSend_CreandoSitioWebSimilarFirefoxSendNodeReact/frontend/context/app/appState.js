import React, { useReducer } from 'react';
// Contexts
import appContext from './appContext';
// Reducer
import appReducer from './appReducer';
// Cliente axios
import clienteAxios from '../../config/axios';
// Types
import {
  MOSTRAR_ALERTA,
  // LIMPIAR_ALERTA,
  OCULTAR_ALERTA,
  SUBIR_ARCHIVO,
  SUBIR_ARCHIVO_EXITO,
  SUBIR_ARCHIVO_ERROR,
  CREAR_ENLACE_EXITO,
  CREAR_ENLACE_ERROR
} from '../../types';

const AppState = ({children}) => {
  const initialState = {
    mensaje_archivo: null,
    nombre: '',
    nombre_original: '',
    cargando: null
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

  // Subir los archivos al servidor
  const subirArchivos = async (formData, nombreArchivo) => {
    // console.log('Subiendo archivo...');

    dispatch({
      type: SUBIR_ARCHIVO
    });

    try {
      // Enviar en formato form-data el archivo
      const resultado = await clienteAxios.post('/api/archivos', formData);
      // console.log(resultado);
      // console.log(resultado.data.archivo);

      dispatch({
        type: SUBIR_ARCHIVO_EXITO,
        payload: {
          nombre: resultado.data.archivo,
          nombre_original: nombreArchivo
        }
      });

    } catch (error) {
      console.log(error);

      dispatch({
        type: SUBIR_ARCHIVO_ERROR,
        payload: error.response.data.mgs
      });      
    }
  };

  return (
    <appContext.Provider
      value={{
        mensaje_archivo: state.mensaje_archivo,
        nombre: state.nombre,
        nombre_original: state.nombre_original,
        cargando: state.cargando,
        mostrarAlerta,
        subirArchivos,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;