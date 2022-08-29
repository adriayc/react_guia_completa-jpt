import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CategoriasContext = createContext();

const CategoriasProvider = ({children}) => {

  const [categorias, setCategorias] = useState([]);

  // Definir la funcion fuera del useEffect
  const obtenerCategorias = async () => {
    try {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

      const { data } = await axios(url);
      // console.log(data.drinks);

      setCategorias(data.drinks);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Llamar la funcion dentro del useEffect
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider 
      value={{
        categorias
      }}
    >
      {children}
    </CategoriasContext.Provider>
  );
};

export {
  CategoriasProvider
};
export default CategoriasContext;