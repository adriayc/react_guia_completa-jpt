// Redux
import { useDispatch, useSelector } from "react-redux";
// Importar actions
import { editarProductoAction } from "../actions/productoActions";

const EditarProducto = () => {
  // Producto a editar
  // const producto = useSelector(state => state.productos);
  const producto = useSelector(state => state.productos.productoeditar);
  // console.log(producto);

  // Si no existe producto retorna null
  if (!producto) return null;

  const { nombre, precio, id } = producto;

  const submitEditarProducto = e => {
    e.preventDefault();

    // editarProductoAction();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Editar Producto</h2>

            <form
              onSubmit={submitEditarProducto}
            >
              <div className="form-group">
                <label htmlFor="nombre" >Nombre Producto</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  id="nombre"
                  placeholder="Nombre Producto"
                  value={nombre}
                />
              </div>

              <div className="form-group">
                <label htmlFor="precio" >Precio Producto</label>
                <input
                  type="number"
                  name="precio"
                  className="form-control"
                  id="precio"
                  placeholder="Precio Producto"
                  value={precio}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default EditarProducto;