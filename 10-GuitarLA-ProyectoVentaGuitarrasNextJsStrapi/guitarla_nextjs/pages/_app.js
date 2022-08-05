import { useState } from "react"
// Importar normalize
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // Definimos un state de forma global
  const [carrito, setCarrito] = useState([])

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  return <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
  />
}

export default MyApp
