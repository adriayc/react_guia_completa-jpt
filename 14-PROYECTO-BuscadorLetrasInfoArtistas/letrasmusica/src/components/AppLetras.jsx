// Importar custom hook useLetras
import useLetras from "../hooks/useLetras"
// Importar componentes
import Alerta from "./Alerta";
import Formulario from "./Formulario"

const AppLetras = () => {

  const { alerta } = useLetras();

  return (
    <>
      <header>Búsqueda de Letras de Canciones</header>

      <Formulario />

      <main>
        {alerta && <Alerta>{alerta}</Alerta>}
      </main>
    </>
  )
}

export default AppLetras