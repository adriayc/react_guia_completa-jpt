// Importar componentes
import Layout from '../components/Layout'
import Listado from '../components/Listado'

export default function Home({guitarras}) {

  // console.log(guitarras)

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
    </Layout>
  )
}

export async function getServerSideProps() {
  
  const urlGuitarras = `${process.env.API_URL}/guitarras?fields=*&populate=imagen`

  const respuesta = await fetch(urlGuitarras)
  const { data } = await respuesta.json()

  return {
    props: {
      guitarras: data
    }
  }
}