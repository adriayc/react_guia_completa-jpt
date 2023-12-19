// Types
// import { USUARIO_AUTENTICADO } from "../../types";
import { 
  REGISTRO_EXITOSO, 
  REGISTRO_ERROR, 
  // LIMPIAR_ALERTA,
  OCULTAR_ALERTA,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  USUARIO_AUTENTICADO,
  CERRAR_SESION
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
    case LOGIN_EXITOSO:
      // Guardar el token en LocalStorage
      localStorage.setItem('token', action.payload);
      
      return {
        ...state,
        token: action.payload,
        autenticado: true
      };
    // case LIMPIAR_ALERTA:
    case OCULTAR_ALERTA:
      return {
        ...state,
        mensaje: null
      };
    case USUARIO_AUTENTICADO:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true
      };
    case CERRAR_SESION:
      // Eliminar el token de LocalStorage
      localStorage.removeItem('token');

      return {
        ...state,
        usuario: null,
        token: null,
        autenticado: null
      };
    default:
      return state;
  }
};