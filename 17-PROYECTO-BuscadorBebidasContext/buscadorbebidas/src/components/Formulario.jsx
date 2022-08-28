// Importar componentes react bootstrap
import { Button, Form, Row, Col } from 'react-bootstrap'; 

const Formulario = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
            <Form.Control 
              type='text'
              name='nombre'
              id='nombre'
              placeholder='Ej: Tequila, Vodka, etc'
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='categoria'>Categoría Bebida</Form.Label>
            <Form.Select
              name='categoria'
              id='categoria'  
            >
              <option value="">- Selecciona Categoria -</option>
            </Form.Select>

          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

export default Formulario