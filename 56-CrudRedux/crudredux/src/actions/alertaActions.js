import {
  MOSTRAR_ALERTA,
  OCULTAR_ALERTA
} from '../types';

// Muestra alerta
export function mostrarAlertaAction(alerta) {
  return (dispatch) => {
    dispatch(mostrarAlerta(alerta));
  };
}

const mostrarAlerta = alerta => ({
  type: MOSTRAR_ALERTA,
  payload: alerta
});