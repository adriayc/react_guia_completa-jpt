import { useState } from "react";
// Importar el custom hook useClima
import useClima from "../hooks/useClima";

const Formulario = () => {

  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const { ciudad, pais } = busqueda;

  const [alerta, setAlerta] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if(Object.values(busqueda).includes('')) {
      setAlerta('Todos los campos son obligatorios');
      return;
    }
    // Limpiar la alerta
    setAlerta('');

    consultarClima(busqueda);
  };

  return (
    <div className="contenedor">

      {/* Mostrar la alerta */}
      {alerta && <p>{alerta}</p>}

      <form
        onSubmit={handleSubmit}
      >
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input 
            type="text" 
            name="ciudad" 
            id="ciudad"
            value={ciudad}
            // Pasa el event de forma directa a la funcion (sin necesitad de pasar el event como parametro)
            onChange={datosBusqueda} />
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select 
            name="pais" 
            id="pais"
            value={pais}
            onChange={datosBusqueda}
          >
            <option value="">Seleccione un país</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="BO">Bolivia</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>

        <input 
          type="submit" 
          value="Consultar Clima" />
      </form>
    </div>
  )
}

export default Formulario