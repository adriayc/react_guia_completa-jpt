import { useState, useEffect } from 'react'

// Importar componentes
import Mensaje from './Mensaje';

import CerrarModal from '../img/cerrar.svg';

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar }) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');

  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    //   console.log('Componente listo');
    if(Object.keys(gastoEditar).length > 0) {
        setNombre(gastoEditar.nombre);
        setCantidad(gastoEditar.cantidad);
        setCategoria(gastoEditar.categoria);
    }
  }, []);

  const ocultarModal = () => {
    //   console.log('Ocultando...');
    setAnimarModal(false);

    setTimeout(() => {
        setModal(false);
    }, 500);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('Enviando formulario');

    if([nombre, cantidad, categoria].includes('')) {
        // console.log('Fallo la validacion');
        setMensaje('Todos los campos son obligatorios');

        setTimeout(() => {
            setMensaje('');
        }, 3000);

        return;
    }

    guardarGasto({ nombre, cantidad, categoria });
  };

  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img 
                src={CerrarModal} 
                alt="Cerrar modal" 
                onClick={ocultarModal}
            />
        </div>

        <form 
            className={`formulario ${animarModal ? "animar" : "cerrar"}`}
            onSubmit={handleSubmit}
        >
            <legend>Nuevo Gasto</legend>
            {/* {mensaje && <Mensaje children={mensaje} tipo="error" />} */}
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>
                <input 
                    type='text' 
                    id='nombre'
                    placeholder='Añade el Nombre del Gasto'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                    type='number' 
                    id='cantidad'
                    placeholder='Añade la Cantidad del Gasto: Ej. 300'
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))}
                />
            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select 
                    id="categoria"
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>

            <input type="submit" value="Añadir Gasto" />
        </form>
    </div>
  )
}

export default Modal