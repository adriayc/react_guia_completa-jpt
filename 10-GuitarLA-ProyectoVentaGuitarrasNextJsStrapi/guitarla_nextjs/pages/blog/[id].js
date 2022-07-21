import { useRouter } from "next/router"

const EntradaBlog = () => {

  // Obtener el ID de la ruta (id: depende del nombre del archivo)
  const router = useRouter()
  console.log(router.query)
  
  return (
    <div>EntradaBlog</div>
  )
}

export default EntradaBlog