import { useContext } from "react";
// Importar el context de categorias
import CategoriasContext from "../context/CategoriasProvider";

const useCategorias = () => {
    return useContext(CategoriasContext);
};

export default useCategorias;