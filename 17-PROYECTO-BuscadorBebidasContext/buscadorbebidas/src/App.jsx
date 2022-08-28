// Importar el provider de categorias
import { CategoriasProvider } from "./context/CategoriasProvider"
// Importar componentes react bootstrap
import { Container } from "react-bootstrap"
// Importar componentes
import Formulario from "./components/Formulario"

function App() {

  return (
    <CategoriasProvider>
      <header className="py-5">
        <h1>Buscador deBebidas</h1>
      </header>

      <Container className="mt-5">
        <Formulario />
      </Container>
    </CategoriasProvider>
  )
}

export default App
