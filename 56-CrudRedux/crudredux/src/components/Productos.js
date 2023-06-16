import { Fragment, useEffect } from "react";
// Importar redux
import { useSelector, useDispatch } from "react-redux";
// Importar actions
import { obtenerProductosAction } from "../actions/productoActions";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la API, usamos dispatch
    const cargarProductos = () => dispatch(obtenerProductosAction());

    cargarProductos();
  }, []);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </Fragment>
  );
}
 
export default Productos;