import { Fragment } from 'react';
// Importar constantes
import { MARCAS, YEARS, PLANES } from '../constants';
// Importar custom hook useCotizador
import useCotizador from '../hooks/useCotizador';
// Importar componentes
import Error from './Error';

const Formulario = () => {

  // Llamando custom hook useCotizador
  const { datos, handleChangeDatos, error, setError } = useCotizador();

  const handleSubmit = e => {
    e.preventDefault();

    // Validar que el objeto no tenga campos vacios
    if(Object.values(datos).includes('')) {
      // console.error('Error, campos obligatorios');
      setError('Todos los campos son obligatorios');
      return;
    }
    // Limpiar el valor del state error
    setError('');

    // TODO: Cotizar
  };

  return (
    <>
      {error && <Error />}
      <form
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
          <select 
            name="marca" 
            id="marca"
            className="w-full p-3 bg-white border border-gray-200"
            value={datos.marca}
            onChange={e => handleChangeDatos(e)}
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
            value={datos.year}
            onChange={e => handleChangeDatos(e)}
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
                <input 
                  type="radio" 
                  name="plan" 
                  value={plan.id}
                  onChange={e => handleChangeDatos(e)} />
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