// Importar componentes
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, curso, blogs}) {

  // console.log(guitarras)
  // console.log(guitarras[3])
  // console.log(curso)
  // console.log(blogs)

  return (
    <Layout
      pagina='Inicio'
      guitarra={guitarras[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

        <Listado
          guitarras={guitarras}
        />
      </main>

      <Curso
        curso={curso}
      />

      <section className='contenedor'>
        <ListadoBlog
          entradas={blogs}
        />
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  
  // Forma no optimizada para llamar multiples request (Llama a la request de guitarra y luego curso)
  // const urlGuitarras = `${process.env.API_URL}/guitarras?fields=*&populate=imagen`
  // const respuesta = await fetch(urlGuitarras)
  // const { data } = await respuesta.json()

  // const urlCurso = `${process.env.API_URL}/curso?fields=*&populate=imagen`
  // const respuesta2 = await fetch(urlGuitarras)
  // const { data: data2 } = await respuesta2.json()

  // Forma optimizada de llamar multiple request (Llama de forma paralela)
  const urlGuitarras = `${process.env.API_URL}/guitarras?fields=*&populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?fields=*&populate=imagen`
  const urlBlogs = `${process.env.API_URL}/blogs?pagination[limit]=3&sort=createdAt:desc&fields=*&populate=imagen`

  // Llama de forma paralela los request de la urlGuitarras y urlCurso
  const [resGuitarras, resCurso, resBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlBlogs),
  ])

  const [{data: guitarras}, {data: curso}, {data: blogs}] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resBlogs.json(),
  ])
  // console.log(guitarras)
  // console.log(curso)

  return {
    props: {
      // guitarras: guitarras
      guitarras,
      curso,
      blogs
    }
  }
}