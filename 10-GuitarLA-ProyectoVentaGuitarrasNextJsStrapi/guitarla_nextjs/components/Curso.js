// Importar modulo de CSS
import styles from "../styles/Curso.module.css"

const Curso = ({curso}) => {

  // console.log(curso)

  const { attributes: { titulo, contenido, imagen } } = curso
  // console.log(imagen.data.attributes.url)

  return (
    // Opcion #1 - Inyectando variables a codigo CSS en la etiqueta HTML
    // <section style={{
    //   backgroundColor: 'red'
    // }}>
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p className={styles.texto}>{contenido}</p>

          <a className={styles.enlace} href="#">Más Información</a>
        </div>
      </div>

      {/* Opcion #2 - Inyectando variables a codigo CSS del componente (El style solo pertenece al componente) */}
      <style jsx>{`
        section {
          // background-color: red
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.data.attributes.url});
          background-size: cover;
          background-position: 50%;
          padding: 10rem 0;
          margin-top: 10rem
        }
        // @media (min-width: 992px) {
        //   section {
        //     background-color: blue
        //   }
        // }
      `}</style>
    </section>
  )
}

export default Curso