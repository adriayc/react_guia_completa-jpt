import { useEffect } from 'react'
// Importar componentes
import Layout from '../components/Layout'

const Blog = () => {

  // Usando useEffect de React.js
  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'http://localhost:1337/api/blogs'

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      console.log(resultado)
    }

    consultarAPI()
  }, [])

  return (
    <Layout
      pagina='Blog'
    >
      <h1>Desde Blog</h1>
    </Layout>
  )
}

export default Blog