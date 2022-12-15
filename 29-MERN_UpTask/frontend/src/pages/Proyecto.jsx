import { useEffect } from "react"
import { useParams } from "react-router-dom"
// Importar custom hooks
import useProyectos from "../hooks/useProyectos"

const Proyecto = () => {
  const params = useParams()
  // console.log(params)

  const { obtenerProyecto } = useProyectos()

  // obtenerProyecto(params.id)
  // Lo ideal es mejor cargarlo por medio de hooks
  useEffect(() => {
    obtenerProyecto(params.id)
  }, [])

  return (
    <div>Proyecto</div>
  )
}

export default Proyecto