// Importar custom hook useCotizador
import useCotizador from "../hooks/useCotizador";
// Importar componentes
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Spinner from "./Spinner";

const AppSeguros = () => {

  const { /*resultado,*/ cargando } = useCotizador();

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">Cotizador de Seguros de Auto</h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded p-10">
        <Formulario />

        {/* {cargando ? 'Cargando...' : resultado} */}
        {cargando ? <Spinner /> : <Resultado />}
      </main>
    </>
  )
}

export default AppSeguros;