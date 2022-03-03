import { useState } from 'react'

// Importar componentes
import Header from './components/Header';
import Modal from './components/Modal';

// Importar un imagen
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    // console.log('Click para añadir un nuevo gasto');

    setModal(true);

    // Animar el modal en un tiempo de 500 milisegundos
    setTimeout(() => {
      // console.log('Animando modal...');

      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = gasto => {
    console.log(gasto);
  };

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {/* Operador ternario */}
      {/* {isValidPresupuesto ? (
        <div className='nuevo-gasto'>
          <img src={IconoNuevoGasto} alt="Icono nuevo gasto" />
        </div>
      ): null} */}

      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img 
            src={IconoNuevoGasto} 
            alt="Icono nuevo gasto" 
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && <Modal 
                  setModal={setModal} 
                  animarModal={animarModal} 
                  setAnimarModal={setAnimarModal}
                  guardarGasto={guardarGasto}
                />}
    </div>
  )
}

export default App
