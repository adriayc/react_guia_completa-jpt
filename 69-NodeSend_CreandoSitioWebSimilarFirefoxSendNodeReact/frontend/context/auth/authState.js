import React, { useReducer } from "react";
// Context
import authContext from "./authContext";

// const AuthState = props => {
const AuthState = ({children}) => {
  const hola = () => {
    console.log('Hola!');
  };

  return (
    <authContext.Provider
      value={{
        hola
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;