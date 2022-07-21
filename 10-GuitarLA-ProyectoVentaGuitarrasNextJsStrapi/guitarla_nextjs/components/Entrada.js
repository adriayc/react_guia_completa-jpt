import Link from "next/link"
import Image from "next/image"
// Importar helper
import { formatearFecha } from "../helpers"

const Entrada = ({entrada}) => {

  // console.log(entrada)
  // const { titulo, resumen, imagen, publishedAt, id } = entrada.attributes
  const { attributes: { titulo, resumen, imagen, publishedAt, id } } = entrada
  // console.log(imagen.data.attributes.url)

  return (
    <article>
      <Image layout="responsive" width={800} height={600} src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} />

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