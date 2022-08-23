import { useContext } from "react";
// Importamos el provider
import LetrasContext from "../context/LetrasProvider";

const useLetras = () => {
  return useContext(LetrasContext);
};

export default useLetras;