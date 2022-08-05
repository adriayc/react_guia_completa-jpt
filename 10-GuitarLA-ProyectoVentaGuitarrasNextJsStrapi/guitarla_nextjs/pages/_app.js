import { useState } from "react"
// Importar normalize
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // Definimos un state de forma global
  const [carrito, setCarrito] = useState([])

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

  return <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
  />
}

export default MyApp
