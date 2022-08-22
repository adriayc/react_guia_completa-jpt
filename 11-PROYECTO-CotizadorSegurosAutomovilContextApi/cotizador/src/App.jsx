// Importar provider
import { CotizadorProvider } from "./context/CotizadorProvider";
// Importar componentes
import AppSeguros from "./components/AppSeguros";

function App() {

  return (
    <CotizadorProvider>
      <AppSeguros />
    </CotizadorProvider>
  )
}

export default App;