import axios from "axios";
import { useState, createContext } from "react";

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {

  // console.log(import.meta.env.VITE_API_KEY);

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [resultado, setResultado] = useState({});

  const [cargando, setCargando] = useState(false);

  const [noResultado, setNoResultado] = useState('');

  const datosBusqueda = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  };

  const consultarClima = async datos => {
    // console.log(datos);

    setCargando(true);
    setNoResultado('');
    try {
      const { ciudad, pais } = datos;

      const appId = import.meta.env.VITE_API_KEY;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;
      // console.log(url);

      const { data } = await axios(url);
      // console.log(data[0]);

      const { lat, lon } = data[0];
      // console.log(lat);
      // console.log(lon);

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      // Renombrar data como clima
      const { data: clima } = await axios(urlClima);
      // console.log(clima);

      setResultado(clima);

      // Reestablecemos el valor del state cargando
      // setCargando(false);

    } catch (error) {
      // console.log(error);

      setNoResultado('No hay resultados');
    } finally {
      setCargando(false);
    }
    // Reestablecemos el valor del state cargando
    // setCargando(false);
  };

  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        resultado,
        cargando,
        noResultado
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export {
  ClimaProvider
};
export default ClimaContext;