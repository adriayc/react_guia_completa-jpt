import { useState } from 'react'

// Importar componentes
import Mensaje  from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault();

    // console.log('Enviando formulario');
    // console.log(Number(presupuesto));

    if(!Number(presupuesto) || Number(presupuesto) < 0) {
      // console.log('No es un presupuesto válido');
      setMensaje('No es un presupuesto válido');
    } else {
      console.log('Si es un presupuesto válido');
    }
  };

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={handlePresupuesto}>
            <div className='campo'>
                <label>Definir Presupuesto</label>

                <input 
                    type="text"
                    className='nuevo-presupuesto'
                    placeholder='Añade tu Presupuesto'
                    value={presupuesto}
                    onChange={e => setPresupuesto(e.target.value)}      //Almacena el valor en el state
                    />
            </div>

            <input type="submit" value='Añadir' />

            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto