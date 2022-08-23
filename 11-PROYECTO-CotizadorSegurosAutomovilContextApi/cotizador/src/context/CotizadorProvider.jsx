import { createContext, useState } from 'react';
// Importar helpers
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers';

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  });

  const [error, setError] = useState('');

  const [resultado, setResultado] = useState(0);

  const [cargando, setCargando] = useState(false);

  const handleChangeDatos = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    // Establecer los nuevos valores a los datos (sin borrarlos el objeto previo)
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    // console.log('Cotizando...');

    // Una base
    let resultado = 2000;

    // Obtener diferencia de años
    // console.log(datos.year);
    const diferencia = obtenerDiferenciaYear(datos.year);
    // console.log(diferencia);

    // Hay que restar el 3% por cada año
    resultado -= ((diferencia * 3)/100) * resultado;
    // console.log(resultado);

    // Europeo 30%
    // Americano 15%
    // Asiatico 5%
    resultado *= calcularMarca(datos.marca);    
    // console.log(resultado);

    // Básico 20%
    // Completo 50%
    resultado *= calcularPlan(datos.plan);
    // resultado = resultado.toFixed(2);
    // console.log(resultado);

    // Formatear Dinero
    resultado = formatearDinero(resultado);
    // console.log(resultado);

    setCargando(true);
    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  };

  return (
    <CotizadorContext.Provider 
      // Hacer diponible variables o funciones al context
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  ); 
};

export {
  CotizadorProvider
};
export default CotizadorContext;