// Importar el provider de clima
import { ClimaProvider } from "./context/ClimaProvider";
// Importar componentes
import AppClima from "./components/AppClima";

function App() {

  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>

      <AppClima />
    </ClimaProvider>
  )
}

export default App
