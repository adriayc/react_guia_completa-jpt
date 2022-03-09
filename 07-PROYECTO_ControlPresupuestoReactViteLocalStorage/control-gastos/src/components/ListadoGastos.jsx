import React from 'react'

// Importar componentes
import Gasto from './Gasto';

const ListadoGastos = ({ gastos, setGastoEditar }) => {
  return (
    <div className='contenedor listado-gastos'>
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>

        {gastos.map(gasto => (
          <Gasto 
            key={gasto.id}        // Eliminamos el error de solicitud del 'key'
            gasto={gasto}
            setGastoEditar={setGastoEditar}
          />
        ))}
    </div>
  )
}

export default ListadoGastos;