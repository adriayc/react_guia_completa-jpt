import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITOSO,
  PRODUCTO_ELIMINADO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  COMENZAR_EDITADO_PRODUCTO,
  PRODUCTO_EDITADO_EXITOSO,
  PRODUCTO_EDITADO_ERROR
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoeliminar: null,
  productoeditar: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case AGREGAR_PRODUCTO:
    case COMENZAR_DESCARGA_PRODUCTOS:
    case COMENZAR_EDITADO_PRODUCTO:
      return {
        ...state,
        // loading: true
        loading: action.payload
      };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload]     // Actualizamos productos
      };
    case AGREGAR_PRODUCTO_ERROR:
    case DESCARGA_PRODUCTOS_ERROR:
    case PRODUCTO_ELIMINADO_ERROR:
    case PRODUCTO_EDITADO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    // case COMENZAR_DESCARGA_PRODUCTOS:
    //   return {
    //     ...state,
    //     loading: action.payload   // true
    //   };
    case DESCARGA_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload
      };
    // case DESCARGA_PRODUCTOS_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload
    //   };
    case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        productoeliminar: action.payload
      };
    case PRODUCTO_ELIMINADO_EXITOSO:
      return {
        ...state,
        productos: state.productos.filter(producto => producto.id !== state.productoeliminar),   // Eliminamos el producto del state
        productoeliminar: null
      };
    // case PRODUCTO_ELIMINADO_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload
    //   };
    case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoeditar: action.payload
      };
    // case COMENZAR_EDITADO_PRODUCTO:
    //   return {
    //     ...state,
    //     loading: action.payload   // true
    //   };
    case PRODUCTO_EDITADO_EXITOSO:
      return {
        ...state,
        productos: state.productos.map(producto => producto.id === action.payload.id ? producto = action.payload : producto),
        productoeditar: null
      };
    case PRODUCTO_EDITADO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}