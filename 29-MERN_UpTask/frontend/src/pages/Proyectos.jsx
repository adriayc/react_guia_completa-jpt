import { useEffect } from 'react'
// Importar socket.io
import io from 'socket.io-client'
// Importar custom hooks
import useProyectos from "../hooks/useProyectos"
// Importar components
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"

// Definir una variable para socket.io
let socket

const Proyectos = () => {
  const { proyectos, alerta } = useProyectos()
  // console.log(proyectos)

  // useEffect para socket.io (de una sola ejecucion)
  useEffect(() => {
    // Abrimos la conexion a la URL del backend
    socket = io(import.meta.env.VITE_BACKEND_URL)

    //  Emitir un evento de prueba al servidor
    // socket.emit('prueba')
    // socket.emit('prueba', 'Adriano')
    socket.emit('prueba', proyectos)

    // Recibir informacion desde socket.io (frontend)
    // socket.on('respuesta', () => {
    socket.on('respuesta', (persona) => {
      console.log('Desde el frontend ', persona)
    })
  // }, [])
})    // Usualmente usamos sin dependencia para que se ejecute todo el tiempo

  const { msg } = alerta

  return (
    <>
      <h1 className="font-black text-4xl">Proyectos</h1>

      {msg && <Alerta alerta={alerta} />}

      <div className="bg-white shadow mt-10 rounded-lg">
        {proyectos.length ? 
          proyectos.map(proyecto => (
            <PreviewProyecto 
              key={proyecto._id} 
              proyecto={proyecto} 
            />
          )) : <p className="text-center text-gray-600 uppercase p-5">No hay proyectos aún</p>}
      </div>
    </>
  )
}

export default Proyectos