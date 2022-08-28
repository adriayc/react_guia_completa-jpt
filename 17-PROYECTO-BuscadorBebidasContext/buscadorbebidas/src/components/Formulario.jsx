// Importar el custom hooks categorias
import useCategorias from '../hooks/useCategorias';
// Importar componentes react bootstrap
import { Button, Form, Row, Col } from 'react-bootstrap'; 

const Formulario = () => {

  const { categorias } = useCategorias();
  console.log(categorias);

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
              {categorias.map(categoria => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >{categoria.strCategory}</option>
              ))}
            </Form.Select>

          </Form.Group>
        </Col>
      </Row>

      <Row className='justify-content-end'>
        <Col md={3}>
          <Button
            variant='danger'
            className='text-uppercase w-100'
          >Buscar Bebidas</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Formulario