import { useState, useEffect } from 'react';

// Importar componente de barra de progreso
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  // Escucha los cambios que pasa en gastos
  useEffect(() => {
    // console.log('Componente listo');

    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
    // console.log(totalGastado);
    setGastado(totalGastado);

    const totalDisponible = presupuesto - totalGastado;
    // console.log(totalDisponible);
    setDisponible(totalDisponible);

    // Calcular el porcentaje gastado
    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
    // console.log(nuevoPorcentaje);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1500);
    
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
              styles={ buildStyles({
                pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                trailColor: '#F5F5F5',
                textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
              }) }
              value={porcentaje}
              text={`${porcentaje}% Gastado`}
            />
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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