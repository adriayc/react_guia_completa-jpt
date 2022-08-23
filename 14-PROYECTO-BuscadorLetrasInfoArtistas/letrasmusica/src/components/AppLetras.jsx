// Importar custom hook useLetras
import useLetras from "../hooks/useLetras"
// Importar componentes
import Alerta from "./Alerta";
import Formulario from "./Formulario"
import Letra from "./Letra";

const AppLetras = () => {

  const { alerta, letra, cargando } = useLetras();

  return (
    <>
      <header>Búsqueda de Letras de Canciones</header>

      <Formulario />

      <main>
        {alerta ? <Alerta>{alerta}</Alerta> : (letra ? <Letra /> : (cargando ? 'Cargando...' : <p className="text-center">Busca letras de tus artistas favoritos</p>))}
      </main>
    </>
  )
}

export default AppLetras