import React, { useContext, useEffect, useState } from 'react';
// Importar routing
import { useRouter } from 'next/router';
// Importar el context de firebase
import { FirebaseContext } from '../../firebase';
// Impotar layout component
import Layout from '../../components/layouts/Layout';
// Importar components
import Error404 from '../../components/layouts/404';

const Producto = () => {
  // State del componente
  const [producto, guardarProducto] = useState({});
  const [error, guardarError] = useState(false);

  // Obtener el id actual de la url
  const router = useRouter();
  const { query: { id } } = router;
   // console.log(router);
  // console.log(id);

  // Context de firebase
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (id) {
      // console.log('Existe un id:', id);

      const obtenerProducto = async () => {
        const productoQuery = await firebase.db.collection('productos').doc(id);
        const producto = await productoQuery.get();
        // console.log(producto.data());
        if (producto.exists) {
          // console.log('Existe el producto');
          guardarProducto(producto.data());
        } else {
          // console.log('No existe el producto');
          guardarError(true);
        }
      };

      obtenerProducto();

    }
  }, [id])

  // if (error) return <Error404 />

  return (
    <Layout>
      <>
        {error && <Error404 />}
      </>
    </Layout>
  );
}

export default Producto;