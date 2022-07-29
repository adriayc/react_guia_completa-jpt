// Importar modulo de CSS
import styles from "../styles/Blog.module.css"
// Importar componentes
import Entrada from '../components/Entrada'

const ListadoBlog = ({entradas}) => {
  return (
    // Fragments
    <>
      <h2 className='heading'>Blog</h2>

      <div className={styles.blog}>
        {entradas.map(entrada => (
          <Entrada
            key={entrada.id}
            entrada={entrada}
          />
        ))}
      </div>
    </>
  )
}

export default ListadoBlog