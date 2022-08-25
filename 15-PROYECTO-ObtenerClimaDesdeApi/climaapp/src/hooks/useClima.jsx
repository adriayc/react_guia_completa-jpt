import { useContext } from "react";
// Importar el provider de clima
import ClimaContext from "../context/ClimaProvider";

const useClima = () => {
    return useContext(ClimaContext);
};

export default useClima;