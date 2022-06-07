import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

// Importar componentes
import Layout from './layout/Layout';
import Inicio from './paginas/Inicio';
import NuevoCliente from './paginas/NuevoCliente';
import VerCliente from './paginas/VerCliente';
import EditarCliente from './paginas/EditarCliente';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Nested Routes */}
        <Route path='/clientes' element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='nuevo' element={<NuevoCliente />} />
          <Route path=':id' element={<VerCliente />} />
          <Route path='editar/:id' element={<EditarCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
