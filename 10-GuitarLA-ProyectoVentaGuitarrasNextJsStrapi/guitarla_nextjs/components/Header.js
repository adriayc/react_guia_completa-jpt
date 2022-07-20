import Link from "next/link"
// Importar modulo de CSS
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      {/* El estilo modifica al elemento */}
      {/* <p>Hola Mundo!</p> */}

      <div className="contenedor">
        <div>

        </div>

        {/* El estilos de la navegacion no lo afecta al elemento */}
        {/* <a href="#">Otro Enlace</a> */}

        <nav className={styles.navegacion}>
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