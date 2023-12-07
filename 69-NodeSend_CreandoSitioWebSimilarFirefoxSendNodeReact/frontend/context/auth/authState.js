import React, { useReducer } from "react";
// Context
import authContext from "./authContext";
// Reducer
import authReducer from "./authReducer";
// Axios
import clienteAxios from "../../config/axios";
// Types
// import { USUARIO_AUTENTICADO } from "../../types";
import { 
  REGISTRO_EXITOSO, 
  REGISTRO_ERROR, 
  LIMPIAR_ALERTA,
  LOGIN_EXITOSO,
  LOGIN_ERROR
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
  const usuarioAutenticado = nombre => {
    dispatch({
      type: USUARIO_AUTENTICADO,
      payload: nombre
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario,
        usuarioAutenticado,
        iniciarSesion,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;