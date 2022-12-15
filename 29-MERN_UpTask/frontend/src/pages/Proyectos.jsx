// importar custom hooks
import useProyectos from "../hooks/useProyectos"

const Proyectos = () => {
  const { proyectos } = useProyectos()
  // console.log(proyectos)

  return (
    <>
      <h1 className="font-black text-4xl">Proyectos</h1>

      <div className="bg-white shadow mt-10 rounded-lg p-5">
        {proyectos.length ? <p>Si hay Proyectos</p> : <p className="text-center text-gray-600 uppercase">No hay proyectos aún</p>}
      </div>
    </>
  )
}

export default Proyectos