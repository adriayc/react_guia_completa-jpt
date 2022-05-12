import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

// Importar componentes
import IniciarSesion from './layout/IniciarSesion';
import LoginForm from './paginas/LoginForm';
import Layout from './layout/Layout';
import Inicio from './paginas/Inicio';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IniciarSesion />}>    {/* Master page */}
          <Route index element={<LoginForm />} />
        </Route>

        {/* Nested Routes */}
        <Route path='/clientes' element={<Layout />}>
          <Route index element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
