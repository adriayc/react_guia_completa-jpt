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
  CREAR_ENLACE_ERROR,
  LIMPIAR_STATE,
  AGREGAR_PASSWORD,
  AGREGAR_DESCARGAS
} from '../../types';

const AppState = ({children}) => {
  const initialState = {
    mensaje_archivo: null,
    nombre: '',
    nombre_original: '',
    cargando: null,
    descargas: 1,
    password: '',
    autor: null,
    url: ''
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
        payload: error.response.data.msg
      });      
    }
  };

  // Crea un enlace una vez que se subio el archivo
  const crearEnlace = async () => {
    // console.log('Creando el enlace...');

    const data = {
      nombre: state.nombre,
      nombre_original: state.nombre_original,
      descargas: state.descargas,
      password: state.password,
      autor: state.autor
    };

    try {
      const resultado = await clienteAxios.post('/api/enlaces', data);
      // console.log(resultado);
      // console.log(resultado.data.msg);

      dispatch({
        type: CREAR_ENLACE_EXITO,
        payload: resultado.data.msg
      });

    } catch (error) {
      console.log(error);
      // console.log(error.response.data.msg);
    }
  };

  const limpiarState = () => {
    // console.log('Limpiando state...');

    dispatch({
      type: LIMPIAR_STATE,
      payload: ''
    });
  };

  // Agregar el password
  const agregarPassword = password => {
    // console.log(password);

    dispatch({
      type: AGREGAR_PASSWORD,
      payload: password
    });
  };

  // Agrega el numero de descarga
  const agregarDescargas = descargas => {
    // console.log(descargas);

    dispatch({
      type: AGREGAR_DESCARGAS,
      payload: descargas
    });
  };

  return (
    <appContext.Provider
      value={{
        mensaje_archivo: state.mensaje_archivo,
        nombre: state.nombre,
        nombre_original: state.nombre_original,
        cargando: state.cargando,
        descargas: state.descargas,
        password: state.password,
        autor: state.autor,
        url: state.url,
        mostrarAlerta,
        subirArchivos,
        crearEnlace,
        limpiarState,
        agregarPassword,
        agregarDescargas
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;