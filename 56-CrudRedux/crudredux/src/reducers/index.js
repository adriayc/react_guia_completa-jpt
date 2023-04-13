import { combineReducers } from 'redux';
// Impotar reducers
import productosReducer from './productosReducer';

// Si se requiere mas de 2 reducer usar combineReducers
export default combineReducers({
  productos: productosReducer,
});