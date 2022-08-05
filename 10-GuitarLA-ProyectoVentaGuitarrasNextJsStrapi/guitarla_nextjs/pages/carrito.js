// Importar modulo de CSS
import styles from "../styles/Carrito.module.css"
// Importar componentes
import Layout from '../components/Layout'

// Extraemos el prop de carrito (definido como global)
const Carrito = ({ carrito }) => {

  console.log(carrito)

  return (
    <Layout
      pagina={'Carrito de Compras'}
    >
      <h1 className='heading'>Carrito</h1>

      <main className={`contenedor ${styles.contenido}`}>
        <div>1</div>
        <div>2</div>
      </main>
    </Layout>
  )
}

export default Carrito