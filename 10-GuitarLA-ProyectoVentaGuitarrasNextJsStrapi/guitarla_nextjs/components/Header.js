import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
// Importar modulo de CSS
import styles from "../styles/Header.module.css"

const Header = ({guitarra}) => {

  // console.log(guitarra)
  
  const router = useRouter()
  // console.log(router.pathname)

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          {/* Opcion #1 para solucionar el warning de "React.forwardRef()" (cuando un componente es hijo directo de un Link), pero no funciona! */}
          <Link href="/" passHref>
            {/* fill - toma al ancho de la pantalla */}
            {/* <Image layout="fill" src="/img/logo.svg" /> */}

            {/* Opcion #2 es que el componente Link este dentro de una etiqueta "a" (cuando un componente es hijo directo de un Link) */}
            <a>
              <Image width={400} height={100} src="/img/logo.svg" alt="Imagen logo" /> 
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a>
                <Image layout="fixed" width={30} height={25} src="/img/carrito.png" alt="Imagen carrito"></Image>
              </a>
            </Link>
          </nav>
        </div>

        {guitarra && (
          <div className={styles.modelo}>
            <h2>Modelo {guitarra.attributes.nombre}</h2>
            <p>{guitarra.attributes.descripcion}</p>
            <p className={styles.precio}>${guitarra.attributes.precio}</p>
            <Link href={`/guitarras/${guitarra.attributes.url}`}>
              <a className={styles.enlace}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === '/' && (
        // Opcion #1 - Usar la etiqueta html img
        // <img className={styles.guitarra} src="/img/header_guitarra.png" alt="Imagen header guitarra" />
        // Opcion #2 - Usar la etiqueta html div dentro el componente Image
        <div className={styles.guitarra}>
          {/* Image no soporta className */}
          {/* <Image layout="fixed" width={200} height={200} className={styles.guitarra} src="/img/header_guitarra.png" alt="Imagen header guitarra" /> */}
          <Image layout="fixed" width={500} height={1200} src="/img/header_guitarra.png" alt="Imagen header guitarra" />
        </div>
      )}
    </header>
  )
}

export default Header