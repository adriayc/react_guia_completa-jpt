import { combineReducers } from 'redux';
// Impotar reducers
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';

// Si se requiere mas de 2 reducer usar combineReducers
export default combineReducers({
  productos: productosReducer,
  alerta: alertaReducer,
});