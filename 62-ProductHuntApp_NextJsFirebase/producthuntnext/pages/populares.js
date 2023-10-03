import React from 'react';
// Impotar layout component
import Layout from '../components/layouts/Layout';
// Importar custom context firebase
import { FirebaseContext } from '../firebase';
// Importar custom hooks
import useProductos from '../hooks/useProductos';
// Importar components
import DetallesProducto from '../components/layouts/DetallesProducto';

const Populares = () => {
  // return (
  //   <div>
  //     <Layout>
  //       <h1>Populares</h1>
  //     </Layout>
  //   </div>
  // );

  const { productos } = useProductos('votos');

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

export default Populares;