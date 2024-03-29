import { Link, useNavigate } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
// Importar actions
import { borrarProductoAction, obtenerProductoEditarAction } from "../actions/productoActions";
// Importar sweetalert2
import Swal from "sweetalert2";

function Producto({producto}) {
  const { nombre, precio, id } = producto;

  // Inicializar
  const dispatch = useDispatch();
  const navigate = useNavigate();   // Habilitar history para redireccion

  // Confirmar si desea eliminarlo
  const confirmarEliminarProducto = id => {
    // Preguntar al usuario
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Un producto que se elimina no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Pasar al action
        dispatch(borrarProductoAction(id));
      }
    })

    // Pasar al action
    // dispatch(borrarProductoAction(id));
  };

  // Redirige de forma programada
  const redireccionarEdicion = producto => {
    dispatch(obtenerProductoEditarAction(producto));
    // Redirigir
    navigate(`/productos/editar/${producto.id}`);
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td><span className="font-weight-bold">${precio}</span></td>
      <td className="acciones">
        <button 
          type="button"
          className="btn btn-primary mr-2"
          onClick={() => redireccionarEdicion(producto)}
        >Editar</button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >Eliminar</button>
      </td>
    </tr>
  );
}

export default Producto;