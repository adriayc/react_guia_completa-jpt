import { Fragment, useContext } from 'react';
// Importar constantes
import { MARCAS, YEARS, PLANES } from '../constants';
// Importar context
import CotizadorContext from '../context/CotizadorProvider';

const Formulario = () => {

  // Llamamos a; cotizador context
  const { hola, fnHolaMundo } = useContext(CotizadorContext);
  console.log(hola);

  fnHolaMundo();

  return (
    <>
      <form>
        <div className="my-5">
          <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
          <select 
            name="marca" 
            id="marca"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value="">-- Selecciona Marca --</option>

            {MARCAS.map(marca => (
              <option 
                key={marca.id} 
                value={marca.id}
              >{marca.nombre}</option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
          <select 
            name="year" 
            id="year"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value="">-- Selecciona Año --</option>

            {YEARS.map(year => (
              <option 
                key={year} 
                value={year}
              >{year}</option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">Elige un Plan</label>
          <div className='flex gap-3 items-center'>
            {PLANES.map(plan => (
              <Fragment key={plan.id}>
                <label htmlFor="">{plan.nombre}</label>
                <input type="radio" name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>

        <input 
          type="submit" 
          className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
          value='cotizar'/>
      </form>
    </>
  )
}

export default Formulario;