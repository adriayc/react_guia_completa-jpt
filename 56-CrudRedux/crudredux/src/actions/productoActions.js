import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITOSO,
    PRODUCTO_ELIMINADO_ERROR
  } from '../types';
// Importar axios
import clienteAxios from '../config/axios';
// Importar SweetAlert2
import Swal from 'sweetalert2';

// Crear nuevos productos
export function crearNuevoProductosAction(producto) {
  // dispatch - siempre mandan a llamar las acciones (en este caso son funciones)
  return async (dispatch) => {
    // console.log(producto);

    dispatch(agregarProducto());

    try {
      // Insertar en la API
      await clienteAxios.post('/productos', producto);
      // Si todo sale bien, actualizar el state
      dispatch(agregarProductoExito(producto));

      // Alerta de exito
      Swal.fire(
        'Correcto',
        'El producto se agregó correctamente',
        'success'
      );

    } catch (error) {
      console.log(error);
      // Si hay un error cambiar el state
      dispatch(agregarProductoError(true));

      // Alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo'
      });
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


// Obtener productos (desde la DB)
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());

    try {
      const respuesta = await clienteAxios.get('/productos');
      // console.log(respuesta.data);
      dispatch(descargaProductosExitoso(respuesta.data));

      // Test
      // setTimeout(async () => {
      //   const respuesta = await clienteAxios.get('/productos');
      //   dispatch(descargaProductosExitoso(respuesta.data));
      // }, 3000);

    } catch (error) {
      console.log(error);
      dispatch(descargaProductosError());
    }
  };
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true
});

const descargaProductosExitoso = productos => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos
});

const descargaProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: true
});

// Selecciona y elimina el producto (NOTA: no usamos sweealert2 en la action porque sweetalert usa promises y la action async/await)
export function borrarProductoAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id));
    // console.log(id);

    try {
      // const resultado = await clienteAxios.delete(`/productos/${id}`);
      await clienteAxios.delete(`/productos/${id}`);
      // await clienteAxios.delete(`/productoserror/${id}`);
      // console.log(resultado);

      dispatch(eliminarProductoExito());

      // Si se elimina mostrar alerta
      Swal.fire(
        'Eliminado!',
        'El producto se elimino correctamente.',
        'success'
      )
      
    } catch (error) {
      console.log(error);
      dispatch(eliminarProductoError());
    }
  };
}

const obtenerProductoEliminar = id => ({
  type: OBTENER_PRODUCTO_ELIMINAR,
  payload: id
});

const eliminarProductoExito = () => ({
  type: PRODUCTO_ELIMINADO_EXITOSO
});

const eliminarProductoError = () => ({
  type: PRODUCTO_ELIMINADO_ERROR,
  payload: true
});