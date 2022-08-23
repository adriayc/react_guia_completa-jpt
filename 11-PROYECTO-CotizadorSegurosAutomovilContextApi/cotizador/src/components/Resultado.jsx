import { useCallback, useMemo, useRef } from "react";
// Importar custom hook useCotizador
import useCotizador from "../hooks/useCotizador"
// Importar constantes
import { MARCAS, PLANES } from '../constants';

const Resultado = () => {

  const { resultado, datos } = useCotizador();
  const { marca, plan, year } = datos;
  const yearRef = useRef(year);

  // console.log(MARCAS);
  // console.log(MARCAS[marca]);       // Error, filtra por posicion

  // Usamos useCallback que modificar la marca y plan cuando el resultado se actualiza (Evitar el re-render)
  // Destructuring de un array
  // const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)), [resultado]);
  const [nombreMarca] = useMemo(() => MARCAS.filter(m => m.id === Number(marca)), [resultado]);
  // console.log(nombreMarca);
  // const [nombrePlan] = useCallback(PLANES.filter(p => p.id === Number(plan)), [resultado]);
  const [nombrePlan] = useMemo(() => PLANES.filter(p => p.id === Number(plan)), [resultado]);

  if(resultado === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Año del Auto: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        {resultado}
      </p>
    </div>
  )
}

export default Resultado;