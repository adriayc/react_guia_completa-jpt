import { number } from 'prop-types';
import { useState, useEffect } from 'react'

// Importar componentes
import Header from './components/Header';
import ListadoGatos from './components/ListadoGastos';
import Modal from './components/Modal';
import Filtros from './components/Filtros';

// Importar helpers
import { generarId } from './helpers';

// Importar un imagen
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {
  // const [presupuesto, setPresupuesto] = useState(0);
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState(localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []);

  const [gastoEditar, setGastoEditar] = useState({});

  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    // console.log('Componente listo!');
    if(Object.keys(gastoEditar).length > 0) {
      // console.log('Gato editar tiene algo');
      
      setModal(true);
  
      // Animar el modal en un tiempo de 500 milisegundos
      setTimeout(() => {
        // console.log('Animando modal...');  
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  // UseEffect para almacener presupuesto en LocalStorage
  useEffect(() => {
    // console.log(presupuesto);
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto]);

  // UseEffect para almacenar gastos en LocalStorage
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    // console.log(presupuestoLS);

    if(presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);

  useEffect(() => {
    if(filtro) {
      // console.log('Filtrando por:', filtro);

      // Filtrar gastos por categoria
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro);
      // console.log(gastosFiltrados);
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

  const handleNuevoGasto = () => {
    // console.log('Click para añadir un nuevo gasto');

    setModal(true);
    setGastoEditar({});       // Establecemos el objeto como vacio

    // Animar el modal en un tiempo de 500 milisegundos
    setTimeout(() => {
      // console.log('Animando modal...');

      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = gasto => {
    // console.log(gasto);
    // return;

    if(gasto.id) {
      // Actualizar
      const gastoActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastoActualizado);
      setGastoEditar({});
    } else {
      // Nuevo Gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    // Cerrar el modal
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminarGasto = id => {
    // console.log('Eliminando... ', id);

    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    // console.log(gastosActualizados);

    setGastos(gastosActualizados);
  };

  return (
    // <div className={modal ? 'fijar' : ''}>
    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
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
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />

            <ListadoGatos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
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
                  gastoEditar={gastoEditar}
                  setGastoEditar={setGastoEditar}
                />}
    </div>
  )
}

export default App
