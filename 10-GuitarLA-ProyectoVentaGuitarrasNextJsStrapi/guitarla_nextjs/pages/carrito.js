import { useEffect, useState } from "react"
import Image from "next/image"
// Importar modulo de CSS
import styles from "../styles/Carrito.module.css"
// Importar componentes
import Layout from '../components/Layout'

// Extraemos el prop de carrito (definido como global)
const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {

  // console.log(carrito)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    // Usamos reduce para calcualar el total, donde total inicializa en cero
    const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)

    setTotal(calculoTotal)
  }, [carrito])

  return (
    <Layout
      pagina={'Carrito de Compras'}
    >
      <h1 className='heading'>Carrito</h1>

      <main className={`contenedor ${styles.contenido}`}>
        <div className={styles.carrito}>
          <h2>Artículos</h2>
          {carrito.length === 0 ? 'Carrito Vacio' : (
            carrito.map(producto => (
              <div key={producto.id} className={styles.producto}>
                <div>
                  <Image layout="responsive" width={250} height={500} src={producto.imagen} alt={producto.nombre} />
                </div>

                <div>
                  <p className={styles.nombre}>{producto.nombre}</p>
                  <div className={styles.cantidad}>
                    <p>Cantidad: {producto.cantidad}</p>
                    <select 
                      className={styles.select}
                      value={producto.cantidad}
                      onChange={(e) => actualizarCantidad({
                        cantidad: e.target.value,
                        id: producto.id
                      })}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </div>
                  <p className={styles.precio}>$<span>{producto.precio}</span></p>
                  <p className={styles.subtotal}>Subtotal: $<span>{producto.precio * producto.cantidad}</span></p>
                </div>

                <button
                  className={styles.eliminar}
                  type="button"
                  onClick={() => eliminarProducto(producto.id)}
                >X</button>
              </div>
            ))
          )}
        </div>
        <div className={styles.resumen}>
          {total > 0 ? (
            <>
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: ${total}</p>
            </>
          ) : <p>No hay productos en el carrito</p>}
        </div>
      </main>
    </Layout>
  )
}

export default Carrito