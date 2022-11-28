import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Importar layouts
import AuthLayout from './layouts/AuthLayout'
// Importar providers
import { AuthProvider } from './context/AuthProvider'
// Importar pages
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import OlvidePassword from './pages/OlvidePassword'
import NuevoPassword from './pages/NuevoPassword'
import ConfirmarCuenta from './pages/ConfirmarCuenta'

// Llamando a la variable de entorno 
// console.log(import.meta.env.VITE_BACKEND_URL)

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='registrar' element={<Registrar />} />
            <Route path='olvide-password' element={<OlvidePassword />} />
            <Route path='olvide-password/:token' element={<NuevoPassword />} />
            <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
