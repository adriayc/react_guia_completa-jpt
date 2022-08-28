// Importar el custom hook de bebidas
import useBebidas from "../hooks/useBebidas";
// Importar los componentes de react bootstrap
import { Row } from "react-bootstrap";
import Bebida from "./Bebida";

const ListadoBebidas = () => {
  
  const { bebidas } = useBebidas();
  console.log(bebidas);

  return (
    <Row>
      {bebidas.map(bebida => (
        <Bebida 
          key={bebida.idDrink}
          bebida={bebida}
        />
      ))}
    </Row>
  )
}

export default ListadoBebidas