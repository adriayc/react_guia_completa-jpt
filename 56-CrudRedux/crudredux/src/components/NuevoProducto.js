import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Importar redux
import { useDispatch, useSelector } from 'react-redux';
// Importar actions de redux
import { crearNuevoProductosAction } from '../actions/productoActions';
import { mostrarAlertaAction } from '../actions/alertaActions';

// Cuando intalamos react router dom y nuestros componentes estan en el routing, tenemos accesos a history (DEPRECADO!)
// const NuevoProducto = ({history}) => {
const NuevoProducto = () => {
  // State del componente
  const [ nombre, guardarNombre ] = useState('');
  const [ precio, guardarPrecio ] = useState(0);

  // Utilizar useDispatch (hook) y te crea una funcion
  const dispatch = useDispatch();

  // Utilizamos para el redirect
  const navigate = useNavigate();

  // Acceder al state del store
  // const cargando = useSelector(state => state);   // NOTA: para ver el valor del state
  // const cargando = useSelector(state => state.productos);
  const cargando = useSelector(state => state.productos.loading);
  const error = useSelector(state => state.productos.error);
  const alerta = useSelector(state => state.alerta.alerta);   // Obtenemos la alerta del state de alerta
  // console.log(cargando)

  // Llamar funciones del action (productoAction) con dispatch
  const agregarProducto = producto => dispatch( crearNuevoProductosAction(producto) );

  const submitNuevoProducto = e => {
    e.preventDefault();

    // Validar formulario
    if (nombre.trim() === '' || precio <= 0) {
      const alerta = {
        msg: 'Ambos campos son obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p3'
      };
      dispatch(mostrarAlertaAction(alerta));

      return;
    }
    
    // Si no hay errores

    // Crear el nuevo producto
    agregarProducto({
      nombre,
      precio
    });

    // Redireccionar
    // history.push('/');      // Deprecado!
    navigate('/');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>

            {/* Mostrar alerta */}
            {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}

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

            {cargando ? <p>Cargando...</p> : null}
            {error ? <p className='alert alert-danger p2 mt-4 text-center'>Hubo un error</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default NuevoProducto;