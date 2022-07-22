// Importar modulo de CSS
import styles from "../styles/Blog.module.css"
// import { useEffect } from 'react'
// Importar componentes
import Layout from '../components/Layout'
import Entrada from '../components/Entrada'

// Podemos extraer las "entradas" del ServerSideProps (como props) 
const Blog = ({entradas}) => {

  // Error!, No se puede llamar a una variable de entorno del lado del servidor
  // const url = `${process.env.API_URL}/blogs?fields=*&populate=imagen`

  // Llamar a una variable de entorno de lado de cliente debe iniciar con "NEXT_PUBLIC"
  // const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs?fields=*&populate=imagen`
  // console.log(url)

  // console.log(entradas)

  // Usando useEffect de React.js
  // useEffect(() => {
  //   const consultarAPI = async () => {
  //     const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`

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
      <main className='contenedor'>
        <h2 className='heading'>Blog</h2>

        <div className={styles.blog}>
          {entradas.map(entrada => (
            <Entrada
              key={entrada.id}
              entrada={entrada}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

// ServerSideProps - Usamos cuando el el contenido cambie muy seguido. Exportamos y automaticamente se importa en la pagina (se ejecuta en el servidor o terminal)
// export async function getServerSideProps() {

//   const url = `${process.env.API_URL}/blogs`
 
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

  // Llamando a una variable de entorno desde el lado del servidor
  const url = `${process.env.API_URL}/blogs?sort=createdAt:desc&fields=*&populate=imagen`
  // console.log(url)
 
  const respuesta = await fetch(url)
  const { data } = await respuesta.json()
  // console.log(data)

  // Retorna siempre un objeto
  return {
    props: {
      entradas: data
    }
  }
}

export default Blog