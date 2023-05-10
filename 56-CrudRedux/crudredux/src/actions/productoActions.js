import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
  } from '../types';
// Importar axios
import clienteAxios from '../config/axios';

  // Crear nuevos productos
  export function crearNuevoProductosAction(producto) {
    // dispatch - siempre mandan a llamar las acciones (en este caso son funciones)
    return async (dispatch) => {
      // console.log(producto);

      dispatch(agregarProducto());

      try {
        // Insertar en la API
        await clienteAxios.post('/productoserror', producto);
        // Si todo sale bien, actualizar el state
        dispatch(agregarProductoExito(producto));
      } catch (error) {
        console.log(error);
        // Si hay un error cambiar el state
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
  const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
  })