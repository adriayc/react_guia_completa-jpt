import React, { useEffect, useState } from 'react';
// Importar firebase
import firebase from '../firebase';

const useAutenticacion = () => {
  const [usuarioAutenticado, guardarUsuarioAutenticado] = useState(null);

  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        guardarUsuarioAutenticado(user);
      } else {
        guardarUsuarioAutenticado(null);
      }
    });

    // Llamar a la funcion
    return () => unsuscribe();
  }, []);

  return usuarioAutenticado;
}

export default useAutenticacion