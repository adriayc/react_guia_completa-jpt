import React, { useContext, useEffect, useState } from 'react';
// Impotar layout component
import Layout from '../components/layouts/Layout';
// Importar custom context firebase
import { FirebaseContext } from '../firebase';
// Importar components
import DetallesProducto from '../components/layouts/DetallesProducto';

const Home = () => {
  const [productos, guardarProductos] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    // Obtener los productos de firebase
    const obtenerProductos = () => {
      firebase
        .db
        .collection('productos')
        .orderBy('creado', 'desc')
        // Llamar un funcion snapshot
        .onSnapshot(manejarSnapshot);
    };

    obtenerProductos();

  }, []);

  // Funcion snapshot para guardar los porductos en el state
  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });

    // console.log(productos);
    guardarProductos(productos);
  }

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