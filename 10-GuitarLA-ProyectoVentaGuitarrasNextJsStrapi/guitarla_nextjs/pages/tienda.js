// Importar componentes
import Layout from '../components/Layout'
import Listado from '../components/Listado'

const Tienda = ({guitarras}) => {

  // console.log(guitarras)

  return (
    <Layout
      pagina='Tienda Virtual'
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

/**
 * ServerSideProps - Se obtiene la data en cada request (Se ejecuta en el lado del servidor o terminal) 
 * Se ejecuta ServerSideProps y StaticProps solo en los archivos del directorio "pages" y no en los de componentes
 */
export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?fields=*&populate=imagen`
  
  const respuesta = await fetch(url)
  const { data } = await respuesta.json()
  // console.log(data)

  return {
    props: {
      guitarras: data
    }
  }
}

export default Tienda