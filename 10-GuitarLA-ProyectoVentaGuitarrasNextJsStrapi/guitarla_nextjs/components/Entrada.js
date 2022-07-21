import Link from "next/link"
// Importar helper
import { formatearFecha } from "../helpers"

const Entrada = ({entrada}) => {

  // console.log(entrada)
  // const { titulo, resumen, imagen, publishedAt, id } = entrada.attributes
  const { attributes: { titulo, resumen, imagen, publishedAt, id } } = entrada

  return (
    <article>
      <div>
        <h1>{titulo}</h1>
        <p>{formatearFecha(publishedAt)}</p>
        <p>{resumen}</p>

        <Link href={`/blog/${id}`}>Leer Entrada</Link>
      </div>
    </article>
  )
}

export default Entrada