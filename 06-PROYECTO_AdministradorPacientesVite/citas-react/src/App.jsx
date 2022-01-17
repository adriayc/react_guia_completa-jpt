import { useState } from 'react';

// Importar componentes
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    // console.log('Elimininando paciente ', id);

    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    // console.log(pacientesActualizados);
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      {/* Llamar el componente */}
      <Header />
      <div className="mt-12 md:flex">
        < Formulario
          pacientes={ pacientes }
          setPacientes={ setPacientes } 
          paciente={ paciente }
          setPaciente={ setPaciente }
        />
        <ListadoPacientes 
          pacientes={ pacientes }
          setPaciente={ setPaciente }
          eliminarPaciente={ eliminarPaciente }
        />
      </div>
    </div>
  )
}

export default App;
