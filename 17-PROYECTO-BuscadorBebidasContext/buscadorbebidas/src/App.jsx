// Importar el provider de categorias
import { CategoriasProvider } from "./context/CategoriasProvider"
import { BebidasProvider } from "./context/BebidasProvider"
// Importar componentes react bootstrap
import { Container } from "react-bootstrap"
// Importar componentes
import Formulario from "./components/Formulario"
import ListadoBebidas from "./components/ListadoBebidas"
import ModalBebida from "./components/ModalBebida"

function App() {

  return (
    // Es recomendable no usar mas de 3 providers
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador deBebidas</h1>
        </header>

        <Container className="mt-5">
          <Formulario />

          <ListadoBebidas />

          {/* No importa donde agreges el componente (pero debe estar dentro del provider) */}
          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
