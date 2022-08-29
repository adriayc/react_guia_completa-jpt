// Importar componentes react bootstrap
import { Col, Card, Button } from 'react-bootstrap';
// Importar el custom hooks bebidas
import useBebidas from '../hooks/useBebidas';

const Bebida = ({bebida}) => {

  // console.log(bebida);

  const { handleModalClick, handleBebidaIdClick } = useBebidas();

  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
        <Card.Img 
          variant='top' 
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />

        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          {/* <Card.Text>Algo mas...</Card.Text> */}

          <Button
            variant='warning'
            className='w-100 text-uppercase mt-2'
            // Funcion onClick ejecuta varias funciones
            onClick={() => {
              // Funcion para el modal
              handleModalClick();
              // Funcion para enviar el id
              handleBebidaIdClick(bebida.idDrink);
            }}
          >Ver Receta</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Bebida