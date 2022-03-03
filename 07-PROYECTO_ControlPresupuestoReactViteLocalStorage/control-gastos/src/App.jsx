import { useState } from 'react'

// Importar componentes
import Header from './components/Header';
import ListadoGatos from './components/ListadoGastos';
import Modal from './components/Modal';

// Importar helpers
import { generarId } from './helpers';

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
    // console.log(gasto);

    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);

    // Cerrar el modal
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    // <div className={modal ? 'fijar' : ''}>
    <div className={modal && 'fijar'}>
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
        <>
          <main>
            <ListadoGatos 
              gastos={gastos}
            />
          </main>
          <div className='nuevo-gasto'>
            <img 
              src={IconoNuevoGasto} 
              alt="Icono nuevo gasto" 
              onClick={handleNuevoGasto}
            />
          </div>
        </>
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
