
function App() {
  // Aqui codigo JS
  // const sumar = () => {
  //   // console.log(2 + 2);

  //   const numero = 5;

  //   if(numero > 5) {
  //     console.log('Si es mayor a 5');
  //   } else {
  //     console.log('No es mayor a 5');
  //   }
  // };

  // sumar();

  const edad = 18;

  // Debe existir un return
  return (
    // Aqui codigo HTMl o expresiones de React

    // Usando un Fragment como el elemento máximo
    <>
      {/* Codigo JS */}
      {/* { 1 + 1 } */}
      { edad >= 18 ? 'Eres mayor de edad' : 'No eres mayor de edad' }

      <div>
        {/* <h1>{ 'Hola Mundo React!'.toLowerCase() }</h1> */}
        {/* <h1>{ 'Hola Mundo React!'.toUpperCase() }</h1> */}
        <h1>{ edad }</h1>
        <p>Un parrafo</p>
      </div>
    </>
  )
}

export default App
