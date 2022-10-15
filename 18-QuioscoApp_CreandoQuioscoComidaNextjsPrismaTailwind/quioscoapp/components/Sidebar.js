import Image from "next/image"
// Importar custon hook
import useQuiosco from "../hooks/useQuiosco"

// Importar componentes
import Categoria from "./Categoria"

const Sidebar = () => {
  const { categorias } = useQuiosco()
  // console.log(categorias)

  return (
    <>
      <Image width={300} height={100} src="/assets/img/logo.svg" alt="Imagen Logotipo" />

      <nav className="mt-10">
        {categorias.map(categoria => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
          />
        ))}
      </nav>
    </>
  )
}

export default Sidebar