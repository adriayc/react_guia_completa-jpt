import React, { useReducer } from "react";
// Context
import authContext from "./authContext";
// Reducer
import authReducer from "./authReducer";
// Axios
import clienteAxios from "../../config/axios";
// TokenAuth
import tokenAuth from "../../config/tokenAuth";
// Types
// import { USUARIO_AUTENTICADO } from "../../types";
import { 
  REGISTRO_EXITOSO, 
  REGISTRO_ERROR, 
  LIMPIAR_ALERTA,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  USUARIO_AUTENTICADO,
  CERRAR_SESION
} from "../../types";

// const AuthState = props => {
const AuthState = ({children}) => {
  // Definir un state inicial
  const initialState = {
    // token: '',
    // token: localStorage.getItem('token'),
    // Verificar que obtenga el token del frontend (vista)
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  // Definir el reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Registrar nuevos usuarios
  const registrarUsuario = async datos => {
    // console.log('Desde registrar usuario');
    // console.log(datos);

    try {
      const respuesta = await clienteAxios.post('/api/usuarios', datos);
      // console.log(respuesta);
      // console.log(respuesta.data.msg);

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data.msg
      });
      
      // Limpiar la alerta despues de 3 segundos
      // setTimeout(() => {
      //   dispatch({
      //     type: LIMPIAR_ALERTA
      //   });
      // }, 3000);

    } catch (error) {
      // console.log(error);
      // console.log(error.response.data.msg);

      dispatch({
        type: REGISTRO_ERROR,
        payload: error.response.data.msg
      });
    }

    // Limpiar la alerta despues de 3 segundos
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTA
      });
    }, 3000);
  };

  // Autenticar usuarios
  const iniciarSesion = async datos => {
    // console.log(datos);

    try {
      const respuesta = await clienteAxios.post('/api/auth', datos);
      // console.log(respuesta.data.token);

      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data.token
      });

    } catch (error) {
      // console.log(error.response.data.msg);

      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg
      });
    }

    // Limpiar la alerta despues de 3 segundos
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTA
      });
    }, 3000);
  };

  // Usuario autenticado
  const usuarioAutenticado = async() => {
    // console.log('Revisando...');

    const token = localStorage.getItem('token');
    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get('/api/auth');
      // console.log(respuesta.data.usuario);
      
      dispatch({
        type: USUARIO_AUTENTICADO,
        payload: respuesta.data.usuario
      });

    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg
      });
    }
  };

  // Cerrar la sesión
  const cerrarSesion = () => {
    // console.log('Cerrando sesion...');

    dispatch({
      type: CERRAR_SESION
    });
  };

  // Usuario autenticado
  // const usuarioAutenticado = nombre => {
  //   dispatch({
  //     type: USUARIO_AUTENTICADO,
  //     payload: nombre
  //   });
  // };

  return (
    <authContext.Provider
      value={{
        // States
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        // Funciones
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;