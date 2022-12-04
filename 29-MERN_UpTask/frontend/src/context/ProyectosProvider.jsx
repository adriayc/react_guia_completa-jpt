import { useEffect, useState, createContext } from 'react' 
import { useNavigate } from 'react-router-dom'
// Importar settings
import clienteAxios from '../config/clienteAxios'

const ProyectosContext = createContext()

const ProyectosProvider = ({children}) => {
  const [ proyectos, setProyectos ] = useState([])
  const [ alerta, setAlerta ] = useState({})

  const navigate = useNavigate()

  const mostrarAlerta = alerta => {
    setAlerta(alerta)

    // Despues de 5s ocultar alerta
    setTimeout(() => {
      setAlerta({})
    }, 5000)
  }

  const submitProyecto = async proyecto => {
    // console.log(proyecto)

    try {
      const token = localStorage.getItem('token')
      if(!token) return

      // Configuracion de la autorizacion
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clienteAxios.post('/proyectos', proyecto, config)
      // console.log(data)

      setAlerta({
        msg: 'Proyecto creado correctamente',
        error: false
      })

      setTimeout(() => {
        setAlerta({})
        navigate('/proyectos')    // Redirigir a la pagina de proyectos
      }, 3000);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProyectosContext.Provider
      value={{
        proyectos,
        mostrarAlerta,
        alerta,
        submitProyecto,
      }}
    >
      {children}
    </ProyectosContext.Provider>
  )
}

export {
  ProyectosProvider
}
export default ProyectosContext