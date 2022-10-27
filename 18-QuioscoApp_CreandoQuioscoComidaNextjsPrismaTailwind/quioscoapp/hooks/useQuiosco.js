import { useContext } from "react"
// Importar context
import QuioscoContext from "../context/QuioscoProvider"

const useQuiosco = () => {
    return useContext(QuioscoContext)
}

export default useQuiosco