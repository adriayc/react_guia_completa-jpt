import axios from "axios";
import { useState, createContext, useEffect } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {

  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState([]);

  const handleChangeCategoria = e => {
    setCategoria(e.target.value);
  };

  useEffect(() => {
    const consultarAPI = async () => {
      // Obtiene por defecto los 20 items de la 1ra pagina
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
      // Obtiene el resto de los items de la 2da pagina
      // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&page=2&apiKey=${import.meta.env.VITE_API_KEY}`;
      // Obtiene los 100 items por pagina
      // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`;
      // console.log(url);

      const { data } = await axios(url);
      // console.log(data.articles);

      setNoticias(data.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria
      }}
    >
        {children}
    </NoticiasContext.Provider>
  )
};

export {
  NoticiasProvider
};
export default NoticiasContext;