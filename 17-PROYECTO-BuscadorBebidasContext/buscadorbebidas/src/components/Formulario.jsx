import { useState } from 'react';
// Importar el custom hooks categorias
import useCategorias from '../hooks/useCategorias';
// Importar componentes react bootstrap
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'; 

const Formulario = () => {

  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: ''
  });
  const [alerta, setAlerta] = useState('');

  const { categorias } = useCategorias();
  // console.log(categorias);

  const handleSubmit = e => {
    e.preventDefault();

    if(Object.values(busqueda).includes('')) {
      // console.log('Todos los campos son obligatorios');

      setAlerta('Todos los campos son obligatorios');
      return;
    }
    setAlerta('');

    
  };  

  return (
    <Form
      onSubmit={handleSubmit}
    >
      {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}

      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
            <Form.Control 
              type='text'
              name='nombre'
              id='nombre'
              placeholder='Ej: Tequila, Vodka, etc'
              value={busqueda.nombre}
              onChange={e => setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value 
              })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='categoria'>Categoría Bebida</Form.Label>
            <Form.Select
              name='categoria'
              id='categoria'
              value={busqueda.categoria}
              onChange={e => setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value
              })}
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
            type='submit'
            variant='danger'
            className='text-uppercase w-100'
          >Buscar Bebidas</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Formulario