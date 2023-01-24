// Importar custom hooks
import useProyectos from '../hooks/useProyectos'
// Importar helpers
import { formatearFecha } from '../helpers/formatearFecha'

const Tarea = ({tarea}) => {
  const { nombre, descripcion, estado, fechaEntrega, prioridad, _id } = tarea

  const { handleModalEditarTarea } = useProyectos()

  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div>
        <p className="text-xl mb-1">{nombre}</p>
        <p className="text-sm text-gray-500 uppercase mb-1">{descripcion}</p>
        <p className="text-sm mb-1">{formatearFecha(fechaEntrega)}</p>
        <p className="text-gray-600 mb-1">Prioridad: {prioridad}</p>
      </div>

      <div className="flex gap-2">
        <button
          className="font-bold text-white text-sm bg-indigo-600 px-4 py-3 rounded-lg uppercase"
          onClick={ () => handleModalEditarTarea(tarea) }
        >Editar</button>

        {estado ? (
          <button
            className="font-bold text-white text-sm bg-sky-600 px-4 py-3 rounded-lg uppercase"
          >Completa</button>
        ) : (
          <button
            className="font-bold text-white text-sm bg-gray-600 px-4 py-3 rounded-lg uppercase"
          >Incompleta</button>
        )}

        <button
          className="font-bold text-white text-sm bg-red-600 px-4 py-3 rounded-lg uppercase"
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Tarea