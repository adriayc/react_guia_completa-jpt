import React, { useReducer } from "react";
// Context
import authContext from "./authContext";
// Reducer
import authReducer from "./authReducer";
// Axios
import clienteAxios from "../../config/axios";
// Types
import { USUARIO_AUTENTICADO } from "../../types";

// const AuthState = props => {
const AuthState = ({children}) => {
  // Definir un state inicial
  const initialState = {
    token: '',
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
      console.log(respuesta);
      
    } catch (error) {
      console.log(error);
    }
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
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;