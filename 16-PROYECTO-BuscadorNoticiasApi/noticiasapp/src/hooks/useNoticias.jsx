import { useContext } from "react";
// Importar el context de Noticias
import NoticiasContext from "../context/NoticiasProvider";

const useNoticias = () => {
    // Usamos el context de Noticias
    return useContext(NoticiasContext);
};

export default useNoticias;