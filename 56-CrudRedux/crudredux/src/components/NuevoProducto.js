// Importar redux
import { useDispatch, useSelector } from 'react-redux';
// Importar actions de redux
import { crearNuevoProductosAction } from '../actions/productoActions';
import { useState } from 'react';

const NuevoProducto = () => {
  // State del componente
  const [ nombre, guardarNombre ] = useState('');
  const [ precio, guardarPrecio ] = useState(0);

  // Utilizar useDispatch (hook) y te crea una funcion
  const dispatch = useDispatch();

  // Llamar funciones del action (productoAction) con dispatch
  const agregarProducto = producto => dispatch( crearNuevoProductosAction(producto) );

  const submitNuevoProducto = e => {
    e.preventDefault();

    // Validar formulario
    if (nombre.trim() === '' || precio <= 0) {
      return;
    }
    
    // Si no hay errores

    // Crear el nuevo producto
    agregarProducto({
      nombre,
      precio
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>

            <form
              onSubmit={submitNuevoProducto}
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
                  onChange={e => guardarNombre(e.target.value)}
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
                  onChange={e => guardarPrecio(Number(e.target.value))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default NuevoProducto;