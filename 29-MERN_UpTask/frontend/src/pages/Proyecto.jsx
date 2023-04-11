import { useEffect } from "react"
import { useParams } from "react-router-dom"
// Importar custom hooks
import useProyectos from "../hooks/useProyectos"

const Proyecto = () => {
  const params = useParams()
  // console.log(params)

  const { obtenerProyecto, proyecto, cargando } = useProyectos()

  // obtenerProyecto(params.id)
  // Lo ideal es mejor cargarlo por medio de hooks
  useEffect(() => {
    obtenerProyecto(params.id)
  }, [])

  // console.log(proyecto)
  const { nombre } = proyecto

  return (
    cargando ? '...' : (
      <div>
        <h1 className="font-black text-4xl">{nombre}</h1>
    </div>
    )
  )
}

export default Proyecto