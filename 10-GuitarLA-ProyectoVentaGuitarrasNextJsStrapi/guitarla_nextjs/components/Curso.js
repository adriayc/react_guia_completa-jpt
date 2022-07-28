
const Curso = ({curso}) => {

  // console.log(curso)

  const { attributes: { titulo, contenido, imagen } } = curso
  console.log(imagen.data.attributes.url)

  return (
    <section>
      <div className="contenedor">
        <div>
          <h2>{titulo}</h2>
          <p>{contenido}</p>
          
          <a href="#">Más Información</a>
        </div>
      </div>
    </section>
  )
}

export default Curso