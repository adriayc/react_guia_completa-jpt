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
  const [ modalFormularioTarea, setModalFormularioTarea ] = useState(false)
  const [ tarea, setTarea ] = useState({})

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
    // console.log('Eliminando ', id)

    try {
      const token = localStorage.getItem('token')
      if (!token) return

      const config = {
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clienteAxios.delete(`/proyectos/${id}`, config)
      // console.log(data);

      // Sincronizar el state de proyetos
      const proyectosActualizados = proyectos.filter(proyectoState => proyectoState.id !== id)
      // console.log(proyectosActualizados)
      setProyectos(proyectosActualizados)

      // Mostrar alerta
      setAlerta({
        msg: data.msg,
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

  const handleModalTarea = () => {
    setModalFormularioTarea(!modalFormularioTarea)
    setTarea({})
  }

  const submitTarea = async tarea => {
    // console.log(tarea)

    if (tarea?.id) {
      // console.log('Editando...')
      // return
      await editarTarea(tarea)
    } else {
      // console.log('Creando...')
      // return
      await crearTarea(tarea)
    }
  }

  const crearTarea = async tarea => {
    try {
      const token = localStorage.getItem('token')
      if (!token) return

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clienteAxios.post('/tareas', tarea, config)
      // console.log(data)

      // Agregar la tarea al state
      const proyectoActualizado = {...proyecto}
      proyectoActualizado.tareas = [...proyecto.tareas, data]

      setProyecto(proyectoActualizado)

      // Cerrar la alerta y modal
      setAlerta({})
      setModalFormularioTarea(false)

    } catch (error) {
      console.log(error)
    }
  }

  const editarTarea = async tarea => {
    try {
      const token = localStorage.getItem('token')
      if (!token) return

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await clienteAxios.put(`tareas/${tarea.id}`, tarea, config)
      // console.log(data)

      // Actualizar el state de tareas del proyecto
      const proyectoActualizado = {...proyecto}
      proyectoActualizado.tareas = proyectoActualizado.tareas.map(tareaState => tareaState._id === data._id ? data : tareaState)
      setProyecto(proyectoActualizado)

      // Remover la alerta y modal
      setAlerta({})
      setModalFormularioTarea(false)

    } catch (error) {
      console.log(error)
    }
  }

  const handleModalEditarTarea = tarea => {
    // console.log(tarea)

    setTarea(tarea)
    // Mostrar modal
    setModalFormularioTarea(true)
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
        modalFormularioTarea,
        handleModalTarea,
        submitTarea,
        handleModalEditarTarea,
        tarea,
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