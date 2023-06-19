import { Fragment, useEffect } from "react";
// Importar redux
import { useSelector, useDispatch } from "react-redux";
// Importar actions
import { obtenerProductosAction } from "../actions/productoActions";
// Importar components
import Producto from "./Producto";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la API, usamos dispatch
    const cargarProductos = () => dispatch(obtenerProductosAction());

    cargarProductos();
  }, []);

  // Obtener el state
  // const productos = useSelector(state => state.productos);
  const productos = useSelector(state => state.productos.productos);
  const error = useSelector(state => state.productos.error);
  const cargando = useSelector(state => state.productos.loading);
  // console.log(productos);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>

      {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> :  null }
      {cargando ? <p className="font-center">Cargando...</p> : null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.lenght === 0 ? 'No hay productos' : (
            productos.map(producto => (
              <Producto
                key={producto.id}
                producto={producto}
              />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
}
 
export default Productos;