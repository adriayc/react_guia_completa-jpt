import React, { useContext, useEffect, useState } from 'react';
// Impotar layout component
import Layout from '../components/layouts/Layout';
// Importar custom hooks
import useProductos from '../hooks/useProductos';
// Importar components
import DetallesProducto from '../components/layouts/DetallesProducto';

const Home = () => {
  const { productos } = useProductos('creado');

  return (
    <div>
      <Layout>
        <div className='listado-productos'>
          <div className='contenedor'>
            <ul className='bg-white'>
              {productos.map(producto => (
                <DetallesProducto 
                  key={producto.id}
                  producto={producto}
                />
              ))}
            </ul>
          </div>  
        </div>
      </Layout>
    </div>
  );
}

export default Home;