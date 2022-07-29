import Link from "next/link"
import Image from "next/image"
// Importar modulo de CSS
import styles from "../styles/Entrada.module.css"
// Importar helper
import { formatearFecha } from "../helpers"

const Entrada = ({entrada}) => {

  // console.log(entrada)
  // const { titulo, resumen, imagen, publishedAt, id } = entrada.attributes
  const { attributes: { titulo, resumen, imagen, publishedAt, url }, id } = entrada
  // console.log(imagen.data.attributes.url)

  return (
    <article>
      {/* priority - cuando la carga de la imagen es muy lenta priorisamos la carga como true */}
      <Image priority="true" layout="responsive" width={800} height={600} src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} />

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{resumen}</p>

        {/* className en componente Link no funciona */}
        {/* <Link className={styles.enlace} href={`/blog/${id}`}>Leer Entrada</Link> */}
        {/* Debemos agregar el className en una etiqueta 'a' dentro de Link*/}
        <Link href={`/blog/${url}`}>
          <a className={styles.enlace}>Leer Entrada</a>
        </Link>
      </div>
    </article>
  )
}

export default Entrada