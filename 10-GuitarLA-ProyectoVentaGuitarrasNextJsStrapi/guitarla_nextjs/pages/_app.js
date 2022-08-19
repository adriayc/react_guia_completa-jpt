import { useEffect, useState } from "react"
// Importar normalize
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // Definimos un state de forma global
  const [carrito, setCarrito] = useState([])

  // Cargar los items de LocalStora al carrito - se ejecuta una sola vez
  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? []
    if(carritoLS.length !== 0) {
      setCarrito(carritoLS)
    }
  }, [])

  // Agregando a LocalStorage - Se ejecuta cada vez que existe un cambio en carrito
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = (producto) => {
    if(carrito.some((articulo) => articulo.id === producto.id)) {
      // console.log('Producto duplicado')

      const carritoActualizado = carrito.map((articulo) => {
        if(articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad
          // Suma la cantidad del producto mas la cantidad del articulo que ya existe en el carrito
          // articulo.cantidad = producto.cantidad + articulo.cantidad
        }
        return articulo;
      })

      // Agregar el carrito actualizado
      setCarrito(carritoActualizado)
    } else {
      // console.log('Nuevo Producto')

      // Agregar el nuevo producto al carrito
      setCarrito([...carrito, producto])
    }
  }

  // console.log(carrito)

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((articulo) => {
      if(articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad
      }
      return articulo
    })

    // Agregar el nuevo carrito actualizado
    setCarrito(carritoActualizado)
  }

  return <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
  />
}

export default MyApp
