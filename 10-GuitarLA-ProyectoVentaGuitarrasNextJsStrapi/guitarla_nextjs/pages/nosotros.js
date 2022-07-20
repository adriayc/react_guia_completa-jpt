// Importar componentes
import Layout from '../components/Layout'

// Sintaxis de una componente en Next.js
// export default function Nosotros() {
// }

// Sintaxis de un componente con React.js
const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
      <h1>Desde Nosotros</h1>
    </Layout>
  )
}

export default Nosotros