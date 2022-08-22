// Importar provider
import { CotizadorProvider } from "./context/CotizadorProvider";
// Importar custom hook useCotizador
// import useCotizador from "./hooks/useCotizador";
// Importar componentes
import AppSeguros from "./components/AppSeguros";

function App() {

  // Error, no se puede usar el custom hook fuera del provider
  // const { resultado } = useCotizador();
  // console.log(resultado);

  return (
    <CotizadorProvider>
      <AppSeguros />
    </CotizadorProvider>
  )
}

export default App;