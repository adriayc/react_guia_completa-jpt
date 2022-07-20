import Link from "next/link"
import Image from "next/image"
// Importar modulo de CSS
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <Link href="/">
          {/* fill - toma al ancho de la pantalla */}
          {/* <Image layout="fill" src="/img/logo.svg" /> */}
          <Image width={400} height={100} src="/img/logo.svg" alt="Imagen logo" /> 
        </Link>

        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header