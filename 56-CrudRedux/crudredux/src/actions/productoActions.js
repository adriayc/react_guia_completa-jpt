import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
  } from '../types';

  // Crear nuevos productos
  export function crearNuevoProductosAction(producto) {
    // dispatch - siempre mandan a llamar las acciones (en este caso son funciones)
    return (dispatch) => {
      // console.log(producto);

      dispatch(agregarProducto());

      try {
        dispatch(agregarProductoExito(producto));
      } catch (error) {
        dispatch(agregarProductoError(true));
      }
    };
  }

  const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    // payload: // Modifica los datos (state) - no modificamos el state
    payload: true
  });

  // Si el producto se guarda en la base de datos
  const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto     // Agregamos el paypload - modificamos el state
  });

  // Si hubo un error
  const agregarProductoError = () => ({})