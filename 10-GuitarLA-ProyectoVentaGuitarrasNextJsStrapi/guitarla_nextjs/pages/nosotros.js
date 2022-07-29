import Image from 'next/image'
// Importar modulo de CSS
import styles from "../styles/Nosotros.module.css"
// Importar componentes
import Layout from '../components/Layout'

// Sintaxis de una componente en Next.js
// export default function Nosotros() {
// }

// Sintaxis de un componente con React.js
const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>
          {/* layour: fill - Muestra la imagen en toda la pagina (No necesita ancho y alto) */}
          {/* <Image layout='fill' src="/img/nosotros.jpg" alt='Imagen sobre nosotros' /> */}

          {/* layour: responsive - Muestra la imagen de forma responsivo en toda la pagina */}
          <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros' />

          {/* layour: intrinsic - Muestra la imagen o se ajusta al ancho del contenedor */}
          {/* <Image layout='intrinsic' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros' /> */}

           {/* layour: fixed - Muestra la imagen del mismo tamaño */}
           {/* <Image layout='fixed' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros' /> */}

          <div>
            <p>Quisque et erat ac libero bibendum consectetur. Morbi lobortis vitae orci quis egestas. Duis egestas vel sapien a eleifend. Nullam pellentesque velit non dolor placerat, ac suscipit velit viverra. Quisque mollis, eros a feugiat aliquet, diam massa aliquam ligula, eget maximus turpis elit non erat. Sed quis ligula ac libero mattis interdum sit amet ut dui. Duis sapien orci, pellentesque sed tristique nec, sodales sed risus. Nulla aliquet odio vel lobortis tempor.</p>
            <p>Quisque et erat ac libero bibendum consectetur. Morbi lobortis vitae orci quis egestas. Duis egestas vel sapien a eleifend. Nullam pellentesque velit non dolor placerat, ac suscipit velit viverra. Quisque mollis, eros a feugiat aliquet, diam massa aliquam ligula, eget maximus turpis elit non erat. Sed quis ligula ac libero mattis interdum sit amet ut dui. Duis sapien orci, pellentesque sed tristique nec, sodales sed risus. Nulla aliquet odio vel lobortis tempor.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros