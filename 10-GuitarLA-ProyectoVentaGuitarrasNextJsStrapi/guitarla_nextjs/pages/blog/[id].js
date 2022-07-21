// import { useRouter } from "next/router"
import Image from 'next/image'
// Importar helper
import { formatearFecha } from "../../helpers"
// Importar modulo de CSS
import styles from "../../styles/Entrada.module.css"
// Importar componentes
import Layout from '../../components/Layout'

// Recibe la "entrada" de ServerSideProps como prop
const EntradaBlog = ({entrada}) => {

  // console.log(entrada)
  const { attributes: { titulo, contenido, imagen, publishedAt }, id } = entrada
  // console.log(imagen)

  // Obtener el ID de la ruta (id: depende del nombre del archivo)
  // const router = useRouter()
  // console.log(router.query)
  
  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>

        <acticle className={styles.entrada}>
          <Image layout='responsive' width={800} height={600} src={imagen.data.attributes.url} alt={`Imagen entrada ${titulo}`} />

          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </acticle>
      </main>
    </Layout>
  )
}

// ServerSideProps - Recibe automaticamente la "query" de useRouter (Se muestra en server o terminal)
// export async function getServerSideProps({query: { id }}) {

//   // console.log(query)
//   // console.log(id)

//   const url = `${process.env.API_URL}/blogs/${id}?fields=*&populate=imagen`

//   const respuesta = await fetch(url)
//   const { data } = await respuesta.json()
//   console.log(data)

//   return {
//     props: {
//       entrada: data
//     }
//   }
// }


// StaticPaths - Obtiene la rutas estaticas para construir
export async function getStaticPaths() {

  const url = `${process.env.API_URL}/blogs?fields=*&populate=imagen`

  const respuesta = await fetch(url)
  const { data } = await respuesta.json()
  // console.log(data)

  const paths = data.map(entrada => ({
    params: { id: entrada.id.toString() } 
  }))
  // console.log(paths)
  // console.log(paths[0].params.id)
  // console.log(typeof paths[0].params.id)

  // Retorna un objeto con los paths que recibe getStaticProps
  return {
    // paths: paths
    paths,
    // fallback: true            // Retorna una serie de rutas que se generan estaticamente (proyecto muy grande)
    fallback: false        // Retorna todas las rutas (proyecto pequeño que no tengas muchas rutas)
    // fallback: 'blocking'
  }
}

// StaticProps - Requiere de StaticPaths en routing dinamicos para obtener la "paths" de la url (Se muestra en server o terminal)
export async function getStaticProps({params: { id }}) {
  // console.log(id)

  const url = `${process.env.API_URL}/blogs/${id}?fields=*&populate=imagen`

  const respuesta = await fetch(url)
  const { data } = await respuesta.json()
  // console.log(data)

  return {
    props: {
      entrada: data
    }
  }
}

export default EntradaBlog