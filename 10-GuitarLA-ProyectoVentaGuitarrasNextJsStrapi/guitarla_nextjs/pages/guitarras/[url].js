import Image from "next/image"
// Importar modulo de CSS
import styles from "../../styles/Guitarra.module.css"
// Importar componentes
import Layout from '../../components/Layout'

const Producto = ({guitarra}) => {

  // console.log(guitarra[0])

  const { attributes: { nombre, descripcion, precio, imagen } } = guitarra[0]
  // console.log(imagen.data.attributes.url)

  return (
    <Layout
      pagina={`Guitarra ${nombre}`}
    >
    <div className={styles.guitarra}>
      <Image layout="responsive" width={180} height={350} src={imagen.data.attributes.url} alt={`Imagen Guitarra ${nombre}`} />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
      </div>
    </div>
    </Layout>
  )
}

// ServerSideProps
export async function getServerSideProps({query: {url}}) {

  // console.log(url)

  const urlGuitarra = `${process.env.API_URL}/guitarras?filters[url]=${url}&fields=*&populate=imagen`
  const respuesta = await fetch(urlGuitarra)
  const { data } = await respuesta.json()
  // console.log(data)

  return {
    props: {
      guitarra: data
      // guitarra: data[0]
    }
  }
}

export default Producto