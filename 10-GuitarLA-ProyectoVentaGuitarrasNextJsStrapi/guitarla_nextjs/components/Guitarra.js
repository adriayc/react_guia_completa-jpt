import Image from "next/image"
import Link from "next/link"
// Importar modulo de CSS
import styles from "../styles/Guitarra.module.css"

const Guitarra = ({guitarra}) => {

  // console.log(guitarra)

  const { attributes: { nombre, descripcion, imagen, precio, url }, id } = guitarra
  // console.log(imagen.data.attributes.url);

  return (
    <div className={styles.guitarra}>
      <Image priority="true" layout="responsive" width={180} height={350} src={imagen.data.attributes.url} />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra