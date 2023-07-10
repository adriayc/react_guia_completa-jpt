import { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Importar actions
import { editarProductoAction } from "../actions/productoActions";

const EditarProducto = () => {
  // Nuevo state de producto
  const [producto, guardarProducto] = useState({
    nombre: '',
    precio: ''
  });

  // Producto a editar
  // const producto = useSelector(state => state.productos);
  const productoEditar = useSelector(state => state.productos.productoeditar);
  // console.log(producto);

  // Si no existe producto retorna null (NOTA: no se puede usar useEffect si hay un return)
  // if (!producto) return null;

  // Llenar el state automaticamente
  useEffect(() => {
    guardarProducto(productoEditar);
  }, [productoEditar]);

  // Leer los datos del formulario
  const onChangeFormulario = e => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

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
                  onChange={onChangeFormulario}
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
                  onChange={onChangeFormulario}
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