// Importar el custom hook useClima
import useClima from "../hooks/useClima";
// Importar componentes
import Formulario from "./Formulario";
import Loading from "./Loading";
import Resultado from "./Resultado";

const AppClima = () => {

  const { resultado, cargando, noResultado } = useClima();
  console.log(resultado);
  // console.log(cargando);
  console.log(noResultado);

  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {/* {cargando ? <Loading /> : (resultado?.name ? <Resultado /> : (noResultado ? <p>{noResultado}</p> : <p>El clima se va a mostrar aquí</p>))} */}
        {cargando ? <Loading /> : (noResultado ? <p>{noResultado}</p> : resultado?.name && <Resultado />)}
      </main>
    </>
  )
}

export default AppClima