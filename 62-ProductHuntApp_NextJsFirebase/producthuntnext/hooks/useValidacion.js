import React, { useEffect, useState } from 'react';

// Estructura de un hook
// const [state, setState] = useState([]);

// Custom hook recibe 3 paramatros
const useValidacion = (stateInicial, validar, fn) => {
  const [valores, guardarValores] = useState(stateInicial);
  const [errores, guardarErrores] = useState({});
  const [submitForm, guardarSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;

      // Si no hay errores
      if (noErrores) {
        // Fn = Función que se ejecuta en el componente
        fn();
      }
      guardarSubmitForm(false);
    }

  }, []);

  return (
    <></>
  );
}

export default useValidacion;