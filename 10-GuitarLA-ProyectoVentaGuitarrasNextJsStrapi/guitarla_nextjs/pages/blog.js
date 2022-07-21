// import { useEffect } from 'react'
// Importar componentes
import Layout from '../components/Layout'

// Podemos extraer las "entradas" del ServerSideProps (como props) 
const Blog = ({entradas}) => {

  console.log(entradas)

  // Usando useEffect de React.js
  // useEffect(() => {
  //   const consultarAPI = async () => {
  //     const url = 'http://localhost:1337/api/blogs'

  //     const respuesta = await fetch(url)
  //     const resultado = await respuesta.json()
  //     console.log(resultado)
  //   }

  //   consultarAPI()
  // }, [])

  return (
    <Layout
      pagina='Blog'
    >
      <h1>Desde Blog</h1>
    </Layout>
  )
}

// ServerSideProps - Usamos cuando el el contenido cambie muy seguido. Exportamos y automaticamente se importa en la pagina (se ejecuta en el servidor o terminal)
// export async function getServerSideProps() {

//   const url = 'http://localhost:1337/api/blogs'
 
//   const respuesta = await fetch(url)
//   const entradas = await respuesta.json()
//   // console.log(entradas)

//   // Retorna siempre un objeto
//   return {
//     props: {
//       // entradas: entradas
//       entradas
//     }
//   }
// }

// StaticProps - Usamos cuando el contenido es estativo. Exportamos y automaticamente se importa en la pagina (se ejecuta en el servidor o terminal)
export async function getStaticProps() {

  const url = 'http://localhost:1337/api/blogs'
 
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  // console.log(entradas)

  // Retorna siempre un objeto
  return {
    props: {
      // entradas: entradas
      entradas
    }
  }
}

export default Blog