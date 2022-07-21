import { useRouter } from "next/router"

// Recibe la "entrada" de ServerSideProps como prop
const EntradaBlog = ({entrada}) => {

  console.log(entrada)

  // Obtener el ID de la ruta (id: depende del nombre del archivo)
  // const router = useRouter()
  // console.log(router.query)
  
  return (
    <div>EntradaBlog</div>
  )
}

// ServerSideProps - Recibe automaticamente la "query" de useRouter (Se muestra en server o terminal)
export async function getServerSideProps({query: { id }}) {

  // console.log(query)
  // console.log(id)

  const url = `http://localhost:1337/api/blogs/${id}?fields=*&populate=imagen`

  const respuesta = await fetch(url)
  const { data } = await respuesta.json()
  console.log(data)

  return {
    props: {
      entrada: data
    }
  }
}

export default EntradaBlog