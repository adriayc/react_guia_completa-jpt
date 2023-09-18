import React, { useEffect } from 'react';
// Importar routing
import { useRouter } from 'next/router';

const Producto = () => {
  // Obtener el id actual de la url
  const router = useRouter();
  const { query: { id } } = router;
   // console.log(router);
  // console.log(id);

  useEffect(() => {
    if (id) {
      console.log('Existe un id:', id);
    }
  }, [id])

  return (
    <h1>Desde [id].js</h1>
  );
}

export default Producto;