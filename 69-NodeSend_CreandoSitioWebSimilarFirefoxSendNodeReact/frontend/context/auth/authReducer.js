// Types
// import { USUARIO_AUTENTICADO } from "../../types";
import { 
  REGISTRO_EXITOSO, 
  REGISTRO_ERROR, 
  LIMPIAR_ALERTA,
  LOGIN_EXITOSO,
  LOGIN_ERROR
 } from "../../types";

export default (state, action) => {
  switch (action.type) {
    // case USUARIO_AUTENTICADO:
    //   return {
    //     // Copia del state
    //     ...state,
    //     usuario: action.payload,
    //   };
    case REGISTRO_EXITOSO:
    case REGISTRO_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        mensaje: action.payload
      };
    // case REGISTRO_ERROR:
    //   return {
    //     ...state,
    //     mensaje: action.payload
    //   };
    case LIMPIAR_ALERTA:
      return {
        ...state,
        mensaje: null
      };
    default:
      return state;
  }
};