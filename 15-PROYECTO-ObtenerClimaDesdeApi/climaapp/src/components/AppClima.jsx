// Importar el custom hook useClima
import useClima from "../hooks/useClima";
// Importar componentes
import Formulario from "./Formulario";
import Resultado from "./Resultado";

const AppClima = () => {

  const { resultado } = useClima();
  // console.log(resultado);

  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {resultado?.name && <Resultado />}
      </main>
    </>
  )
}

export default AppClima