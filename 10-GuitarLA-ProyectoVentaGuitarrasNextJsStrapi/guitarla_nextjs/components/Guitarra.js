import Image from "next/image"
import Link from "next/link"

const Guitarra = ({guitarra}) => {

  // console.log(guitarra)

  const { attributes: { nombre, descripcion, imagen, precio, url }, id } = guitarra
  // console.log(imagen.data.attributes.url);

  return (
    <div>
      <Image layout="responsive" width={500} height={350} src={imagen.data.attributes.url} />

      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>${precio}</p>

        <Link href={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  )
}

export default Guitarra