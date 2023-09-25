import React, { useContext, useEffect, useState } from 'react';
// Importar custom context firebase
import { FirebaseContext } from '../firebase';

const useProductos = orden => {
  const [productos, guardarProductos] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    // Obtener los productos de firebase
    const obtenerProductos = () => {
      firebase
        .db
        .collection('productos')
        // .orderBy('votos', 'desc')
        .orderBy(orden, 'desc')
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

  // Retornar el producto
  return {
    productos
  };
}

export default useProductos