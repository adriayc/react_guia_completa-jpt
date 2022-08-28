import { useContext } from "react";
// Importar el context de bebidas
import BebidasContext from "../context/BebidasProvider";

const useBebidas = () => {
  return useContext(BebidasContext);
};

export default useBebidas;