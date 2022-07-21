
const Entrada = ({entrada}) => {

  // console.log(entrada)
  // const { titulo, resumen, imagen, publishedAt, id } = entrada.attributes
  const { attributes: { titulo, resumen, imagen, publishedAt, id } } = entrada

  return (
    <article>
      <h1>{titulo}</h1>
    </article>
  )
}

export default Entrada