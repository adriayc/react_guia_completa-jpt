
function App() {

  // Debe existir un return
  return (
    // // Debes retornar un elemento en el nivel máximo o alto
    // <div className="App">
    //   <h1>Hola Mundo React!</h1>

    //   {/* Las etiquetas que no tengan una de cierre se debe agregar slash '/' al final */}
    //   {/* <img src="algunaimagen.jpg" alt="Alguna Imagen" /> */}
    //   <input type="text" />

    // {/* Debe existir la etiqueta de cierre */}
    // </div>

    // Usando un Fragment como el elemento máximo
    <>
      <div>
        <h1>Hola Mundo React!</h1>
        <p>Un parrafo</p>
      </div>

      <div>
        <h1>Hola Mundo React!</h1>
        <p>Un parrafo</p>
      </div>
    </>
  )
}

export default App
