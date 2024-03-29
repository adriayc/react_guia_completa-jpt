import {
  MOSTRAR_ALERTA, 
  OCULTAR_ALERTA
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
  alert: null
};

// Para ignorar el warning del build console
// eslint-disable-next-line
export default function(state = initialState, action) {
  switch(action.type) {
    case MOSTRAR_ALERTA:
      return {
        ...state,
        alerta: action.payload
      };
    case OCULTAR_ALERTA:
      return {
        ...state,
        // alerta: action.payload
        alerta: null
      };

    default:
      return state;
  }
}