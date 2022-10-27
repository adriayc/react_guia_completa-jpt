import { createContext, useEffect, useState } from "react";
// Importar router
import { useRouter } from "next/router";
// Importar axios
import axios from "axios";
// Importar toast
import { toast } from 'react-toastify'

const QuioscoContext = createContext()

const QuioscoProvider = ({ children }) => {
  const router = useRouter()

  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  const [producto, setProducto] = useState({})
  const [modal, setModal] = useState(false)
  const [pedido, setPedido] = useState([])
  // const [paso, setPaso] = useState(1)
  const [nombre, setNombre] = useState('')
  const [total, setTotal] = useState(0)

  const obtenerCategorias = async () => {
    const { data } = await axios('/api/categorias')
    // console.log(data);

    setCategorias(data)
  }

  useEffect(() => {
    obtenerCategorias()
  }, [])

  useEffect(() => {
    setCategoriaActual(categorias[0])
  }, [categorias])

  const handleClickCategoria = id => {
    // console.log(id)
    const categoria = categorias.filter(cat => cat.id === id);
    // console.log(categoria)
    setCategoriaActual(categoria[0])
    router.push('/')
  }

  const handleSetProducto = producto => {
    // console.log(producto)
    setProducto(producto)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  // const handleAgregarPedido = (producto) => {
  const handleAgregarPedido = ({ categoriaId, /*imagen,*/ ...producto }) => { // Removiendo la categoriaId e imagen del objeto producto
    // console.log('Agregando...')
    // console.log(producto)

    if (pedido.some(productoState => productoState.id === producto.id)) {
      // console.log('El producto ya existe')

      // Actualizar cantidad
      const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
      setPedido(pedidoActualizado)

      toast.success('Guardado Correctamente')
    } else {
      // console.log('El producto no existe')
      setPedido([...pedido, producto])
      // Crear un toast de exito
      toast.success('Agregado al Pedido')
    }
    // setPedido([...pedido, producto])
    setModal(false) // Cerrar el modal cuando se agrega el pedido
  }

  // const handleChangePaso = paso => {
  //   // console.log(paso)
  //   setPaso(paso)
  // }

  const handleEditarCantidades = id => {
    // console.log(id)

    const productoActualizar = pedido.filter(producto => producto.id === id)
    setProducto(productoActualizar[0])

    setModal(!modal)
  }

  const handleEliminarProducto = id => {
    // console.log(id)

    const pedidoActualizado = pedido.filter(producto => producto.id !== id)
    setPedido(pedidoActualizado)
  }

  // console.log(categorias)

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        handleAgregarPedido,
        pedido,
        // paso,
        // handleChangePaso
        handleEditarCantidades,
        handleEliminarProducto,
        nombre,
        setNombre,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export {
  QuioscoProvider
}
export default QuioscoContext