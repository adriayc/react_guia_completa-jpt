import React, { useEffect, useState } from 'react';
// Impotar router
import { useRouter } from 'next/router';
// Importar custom hooks
import useProductos from '../hooks/useProductos';
// Impotar layout component
import Layout from '../components/layouts/Layout';
import DetallesProducto from '../components/layouts/DetallesProducto';

const Buscar = () => {
  const router = useRouter();
  // const { query } = router;
  const { query: { q } } = router;
  // console.log(router);
  // console.log(query);
  // console.log(q);

  // States
  const [resultado, guardarResultado] = useState([]);

  // Todos los productos
  const { productos } = useProductos('creado');
  // console.log(productos);

  useEffect(() => {
    const busqueda = q?.toLowerCase();
    // console.log(busqueda);
    const filtro = productos.filter(producto => {
      // Filtrar por nombre o descripcion
      return (
        producto.nombre.toLowerCase().includes(busqueda) ||
        producto.descripcion.toLowerCase().includes(busqueda)
      );
      // return producto.nombre.toLowerCase().includes(busqueda);
    });
    // console.log(filtro);

    guardarResultado(filtro);

  }, [q, productos]);

  return (
    <div>
      <Layout>
        <div className='listado-productos'>
          <div className='contenedor'>
            <ul className='bg-white'>
              {resultado.map(producto => (
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

export default Buscar;