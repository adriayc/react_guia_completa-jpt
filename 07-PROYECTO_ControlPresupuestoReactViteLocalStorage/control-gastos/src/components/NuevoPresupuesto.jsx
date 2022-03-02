import { useState } from 'react'

// Importar componentes
import Mensaje  from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault();

    // console.log('Enviando formulario');
    // console.log(Number(presupuesto));

    if(!presupuesto || presupuesto < 0) {
      // console.log('No es un presupuesto válido');
      setMensaje('No es un presupuesto válido');

      return;
    } /*else {
      console.log('Si es un presupuesto válido');
    }*/

    // console.log('Si es un presupuesto válido');
    setMensaje('');

    // console.log(presupuesto);      // El valor de presupuesto es string
    // console.log(typeof presupuesto);

    setIsValidPresupuesto(true);
  };

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={handlePresupuesto}>
            <div className='campo'>
                <label>Definir Presupuesto</label>

                <input 
                    type="number"
                    className='nuevo-presupuesto'
                    placeholder='Añade tu Presupuesto'
                    value={presupuesto}
                    onChange={e => setPresupuesto(Number(e.target.value))}      //Almacena el valor en el state
                    />
            </div>

            <input type="submit" value='Añadir' />

            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto