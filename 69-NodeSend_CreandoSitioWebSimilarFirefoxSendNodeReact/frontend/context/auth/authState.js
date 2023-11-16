import React, { useReducer } from "react";
// Context
import authContext from "./authContext";
// Reducer
import authReducer from "./authReducer";

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

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;