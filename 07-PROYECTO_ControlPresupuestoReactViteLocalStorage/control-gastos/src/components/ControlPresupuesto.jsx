import { useState, useEffect } from 'react';

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  // Escucha los cambios que pasa en gastos
  useEffect(() => {
    // console.log('Componente listo');

    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
    console.log(totalGastado);
    setGastado(totalGastado);
}, [gastos]);

  // Formatea el presupuesto (con una funcion propia de JS)
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
  };

  return (
    <div className='contenedor contenedor-presupuesto sombra dos-columnas'>
        <div>
            <p>Grafica aquí</p>
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>
            <p>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span>{formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto;