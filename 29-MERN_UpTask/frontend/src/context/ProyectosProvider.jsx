import { useEffect, useState, createContext } from 'react' 
import { useNavigate } from 'react-router-dom'
// Importar settings
import clienteAxios from '../config/clienteAxios'

const ProyectosContext = createContext()

const ProyectosProvider = ({children}) => {
  const [ proyectos, setProyectos ] = useState([])
  const [ alerta, setAlerta ] = useState({})
  const [ proyecto, setProyecto ] = useState({})
  const [ cargando, setCargando ] = useState(false)

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
    // return;

    if (proyecto.id) {
      await editarProyecto(proyecto)
    } else {
      await nuevoProyecto(proyecto)
    }
  }

  const editarProyecto = async proyecto => {
    // console.log('Editando...')

    try {
      const token = localStorage.getItem('token')
      if (!token) return

      // Configuracion de la autorizacion
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clienteAxios.put(`/proyectos/${proyecto.id}`, proyecto, config)
      // console.log(data)
      // Sincronizar el state
      const proyectoActualizado = proyectos.map(proyectoState => proyectoState._id === data._id ? data : proyectoState)
      // console.log(proyectoActualizado)
      setProyectos(proyectoActualizado)

      // Mostrar la alerta
      setAlerta({
        msg: 'Proyecto Actualizado Correctamente',
        error: false
      })

      // Redireccionar
      setTimeout(() => {
        setAlerta({})
        navigate('/proyectos')
      }, 3000)

    } catch (error) {
      console.log(error)
    }
  }

  const nuevoProyecto = async proyecto => {
    // console.log('Creando...')

    try {
      const token = localStorage.getItem('token')
      if (!token) return

      // Configuracion de la autorizacion
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clienteAxios.post('/proyectos', proyecto, config)
      // console.log(data)

      // Agregar el proyecto al state (evita solicitar a la API)
      setProyectos([...proyectos, data])

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

  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) return

        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }

        const { data } = await clienteAxios('/proyectos', config)
        // console.log(data)
        setProyectos(data)
      } catch (error) {
        console.log(error)
      }
    }

    obtenerProyectos()
  }, [])

  const obtenerProyecto = async id => {
    // console.log(id)

    setCargando(true)
    try {
      const token = localStorage.getItem('token')
      if (!token) return

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clienteAxios(`/proyectos/${id}`, config)
      // console.log(data)
      setProyecto(data)

    } catch (error) {
      console.log(error)
    } finally {
      setCargando(false)
    }
    // setCargando(false)
  }  

  const eliminarProyecto = async id => {
    console.log('Eliminando ', id)
  }

  return (
    <ProyectosContext.Provider
      value={{
        proyectos,
        mostrarAlerta,
        alerta,
        submitProyecto,
        obtenerProyecto,
        proyecto,
        cargando,
        eliminarProyecto,
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