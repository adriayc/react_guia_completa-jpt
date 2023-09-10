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

  // Función que se ejecuta cuando el usuario escrive algo
  const handleChange = e => {
    guardarValores({
      ...valores,     // Copia de los valores
      [e.target.name]: e.target.value
    })
  };

  // Función que se ejecuta cuand el usuario hace submit
  const handleSubmit = e => {
    e.preventDefault();
    // Validar los valores
    const erroresValidacion = validar(valores);
    // Si existe errores lo guardamos
    guardarErrores(erroresValidacion);
    // Cuando el usuario hace submit del formulario cambia el valor a 'true'
    guardarSubmitForm(true);
  };

  return {
    valores,
    errores,
    submitForm,
    handleChange,
    handleSubmit
  };
}

export default useValidacion;