import { useState } from 'react';

// Importar componentes
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {

  const [pacientes, setPacientes] = useState([]);

  const imprime2mas2 = () => {
    console.log(2 + 2);
  };

  // Funcion que recibe un valor desde el componente hijo Header
  const toma1Valor = (valor) => {
    console.log(valor);
  };

  return (
    <div className="container mx-auto mt-20">
      {/* Llamar el componente */}
      {/* <Header /> */}
      <Header 
        // numeros={ 1 }
        // isAdmin={ true }
        // fn={ imprime2mas2 }

        // Prop que pasa una funcion
        toma1Valor={ toma1Valor }
      />
      <div className="mt-12 md:flex">
        < Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App;
