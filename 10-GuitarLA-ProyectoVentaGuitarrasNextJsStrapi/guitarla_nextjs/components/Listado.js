// Importar modulo de CSS
import styles from "../styles/Listado.module.css"
// Importar componentes
import Guitarra from "./Guitarra"

const Listado = ({guitarras}) => {

  // console.log(guitarras)

  return (
    <div className={styles.listado}>
      {guitarras.map(guitarra => (
        <Guitarra
          // key={guitarra.id}
          key={guitarra.attributes.url}
          guitarra={guitarra}
        />
      ))}
    </div>
  )
}

export default Listado