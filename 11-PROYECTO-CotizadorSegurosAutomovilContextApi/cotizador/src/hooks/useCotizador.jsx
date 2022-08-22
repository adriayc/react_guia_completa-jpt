import { useContext } from "react";
// Importar el context del cotizador
import CotizadorContext from "../context/CotizadorProvider";

const useCotizador = () => {
    return useContext(CotizadorContext);
};

export default useCotizador;