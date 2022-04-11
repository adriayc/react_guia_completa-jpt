import React from 'react'

// Importar componentes
import Gasto from './Gasto';

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) => {
  return (
    <div className='contenedor listado-gastos'>
        {filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {gastosFiltrados.map(gasto => (
              <Gasto 
                key={gasto.id}        // Eliminamos el error de solicitud del 'key'
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        ) : (
          <>
            <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {gastos.map(gasto => (
              <Gasto 
                key={gasto.id}        // Eliminamos el error de solicitud del 'key'
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        )}
    </div>
  )
}

export default ListadoGastos;