// Types
// import { USUARIO_AUTENTICADO } from "../../types";
import { REGISTRO_EXITOSO } from "../../types";

export default (state, action) => {
  switch (action.type) {
    // case USUARIO_AUTENTICADO:
    //   return {
    //     // Copia del state
    //     ...state,
    //     usuario: action.payload,
    //   };
    case REGISTRO_EXITOSO:
      return {
        ...state,
        mensaje: action.payload
      };
    default:
      return state;
  }
};