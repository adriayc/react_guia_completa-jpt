// Importar componentes
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'

export default function Home({guitarras, curso}) {

  // console.log(guitarras)
  // console.log(curso)

  return (
    <Layout
      pagina='Inicio'
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

  // Llama de forma paralela los request de la urlGuitarras y urlCurso
  const [resGuitarras, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
  ])

  const [{data: guitarras}, {data: curso}] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
  ])
  // console.log(guitarras)
  // console.log(curso)

  return {
    props: {
      // guitarras: guitarras
      guitarras,
      curso
    }
  }
}