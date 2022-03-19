import { useState, useEffect } from 'react';

// Importar componente de barra de progreso
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  // Escucha los cambios que pasa en gastos
  useEffect(() => {
    // console.log('Componente listo');

    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
    // console.log(totalGastado);
    setGastado(totalGastado);

    const totalDisponible = presupuesto - totalGastado;
    // console.log(totalDisponible);
    setDisponible(totalDisponible);
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
            <CircularProgressbar
              value={50}
            />
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