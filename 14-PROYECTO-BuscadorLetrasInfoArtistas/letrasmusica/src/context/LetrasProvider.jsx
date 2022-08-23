import axios from "axios";
import { useState, createContext } from "react";

const LetrasContext = createContext();

const LetrasProvider = ({children}) => {

  const [alerta, setAlerta] = useState('');
  const [letra, setLetra] = useState('');
  const [cargando, setCargando] = useState(false);

  const busquedaLetra = async (busqueda) => {
    // console.log(busqueda);

    setCargando(true);
    try {
      const { artista, cancion } = busqueda;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      // console.log(url);

      // const resultado = await axios.get(url);
      // console.log(resultado);
      const { data } = await axios(url);
      // console.log(data.lyrics);

      setLetra(data.lyrics);

    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };

  return (
    <LetrasContext.Provider
      value={{
        alerta,
        setAlerta,
        busquedaLetra,
        letra,
        cargando
      }}
    >
      {children}
    </LetrasContext.Provider>
  );
};

export {
  LetrasProvider
};
export default LetrasContext;