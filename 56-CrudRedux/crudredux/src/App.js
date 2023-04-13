import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importar redux (Provider)
import { Provider } from 'react-redux';
// Importar store (Redux)
import store from './store';
// Importar components
import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />

        <div className="container mt-5">
          <Routes>
            <Route index path="/" element={<Productos />} />
            <Route path="/productos/nuevo" element={<NuevoProducto />} />
            <Route path="/productos/editar/:id" element={<EditarProducto />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;