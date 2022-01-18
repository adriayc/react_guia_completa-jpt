import { useState, useEffect } from 'react';

// Importar componentes
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // Los useEffect pueden existir varios en un componente y se ejecutan de arriba hacia abajo
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];        // Convertir los datos de LocalStora de string a array
      // console.log(pacientesLS);
      // console.log(typeof pacientesLS);          // Los datos que se almacen en LocalStorage son string

      setPacientes(pacientesLS);
    };

    obtenerLS();
  }, []);

  useEffect(() => {
    // console.log('Componente listo o cambió pacientes');

    // Agregar a LocalStorage
    localStorage.setItem('pacientes', JSON.stringify(pacientes));         // Convertir pacientes a string para guardar en LocalStorage
  }, [pacientes]);

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
