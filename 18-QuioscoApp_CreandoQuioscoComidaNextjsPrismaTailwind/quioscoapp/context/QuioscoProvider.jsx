import { createContext, useEffect, useState } from "react";
// Importar axios
import axios from "axios";

const QuioscoContext = createContext()

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  const [producto, setProducto] = useState({})
  const [modal, setModal] = useState(false)
  const [pedido, setPedido] = useState([])

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
  }

  const handleSetProducto = producto => {
    // console.log(producto)
    setProducto(producto)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  // const handleAgregarPedido = (producto) => {
  const handleAgregarPedido = ({ categoriaId, imagen, ...producto }) => { // Removiendo la categoriaId e imagen del objeto producto
    // console.log('Agregando...')
    // console.log(producto)

    if (pedido.some(productoState => productoState.id === producto.id)) {
      // console.log('El producto ya existe')

      // Actualizar cantidad
      const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
      setPedido(pedidoActualizado)
    } else {
      // console.log('El producto no existe')
      setPedido([...pedido, producto])
    }
    setPedido([...pedido, producto])
    setModal(false) // Cerrar el modal cuando se agrega el pedido
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
        pedido
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