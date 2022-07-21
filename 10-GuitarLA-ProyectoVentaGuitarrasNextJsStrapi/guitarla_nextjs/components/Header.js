import Link from "next/link"
import Image from "next/image"
// Importar modulo de CSS
import styles from "../styles/Header.module.css"

const Header = () => {
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
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header