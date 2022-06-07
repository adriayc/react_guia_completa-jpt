import React from 'react';
// Importar Formik
import { Formik, Form, Field/*, ErrorMessage*/ } from 'formik';
// Importar Yup
import * as Yup from 'yup';
// Importar React Router
import { useNavigate } from 'react-router-dom';

// Importar componentes
import Alerta from './Alerta';

const Formulario = () => {

  // Definimos un navigate de react router dom
  const navigate = useNavigate();

  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
              .min(3, 'El Nombre es muy corto')
              .max(20, 'El Nombre es muy largo')
              .required('El Nombre del Clientes es Obligatorio'),
    empresa: Yup.string()
                .required('El Nombre de la Empresa es Obligatorio'),
    email: Yup.string()
              .email('Email no válido')
              .required('El Email es Obligatorio'),
    telefono: Yup.number().typeError('Número no válido')
                .positive('Número no válido')
                .integer('Número no válido'),
    notas: Yup.string()
  });
  
  const handleSubmit = async (valores) => {
      // console.log(valores);

    try {
      // Url del servidor JSON server
      const url = 'http://localhost:4000/clientes';

      // Fetch API tipo POST
      const respuesta = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(valores),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(respuesta);

      const resultado = await respuesta.json();
      console.log(resultado);

      // Redireccionamos a la pagina de clientes
      navigate('/clientes');

    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
      <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>

      <Formik
        initialValues={
          {
              nombre: '',
              empresa: '',
              email: '',
              telefono: '',
              notas: ''
          }
        }
        onSubmit={ async (values, {resetForm}) => {
            // console.log('Enviando formulario...');
            // console.log(values);

            await handleSubmit(values);

            // Limpiar/Reset el formulario
            resetForm();
        }}
        validationSchema = { nuevoClienteSchema }
      >
        {
          // (data) => {
          ({errors, touched}) => {
            // console.log(data); 
            // console.log(errors);
            // console.log(touched);
            return (
              <Form className='mt-10'>
                <div className='mb-4'>
                  <label 
                    className='text-gray-800'
                    htmlFor='nombre'
                  >Nombre:</label>
                  <Field
                    id='nombre'
                    type='text'
                    className='mt-2 block w-full p-3 bg-gray-50'
                    placeholder='Nombre del Cliente'
                    name='nombre'
                  />
                  {/* No se puede modificar los estilos CSS usando el componente */}
                  {/* <ErrorMessage name="nombre" className='bg-red-800' /> */}

                  { errors.nombre && touched.nombre ? (
                    <Alerta>{errors.nombre}</Alerta>
                  ) : null }
                </div>

                <div className='mb-4'>
                  <label 
                    className='text-gray-800'
                    htmlFor='empresa'
                  >Empresa:</label>
                  <Field
                    id='empresa'
                    type='text'
                    className='mt-2 block w-full p-3 bg-gray-50'
                    placeholder='Empresa del Cliente'
                    name='empresa'
                  />

                  { errors.empresa && touched.empresa ? (
                    <Alerta>{errors.empresa}</Alerta>
                  ) : null }
                </div>

                <div className='mb-4'>
                  <label 
                    className='text-gray-800'
                    htmlFor='email'
                  >E-mail:</label>
                  <Field
                    id='email'
                    type='email'
                    className='mt-2 block w-full p-3 bg-gray-50'
                    placeholder='Email del Cliente'
                    name='email'
                  />

                  { errors.email && touched.email ? (
                    <Alerta>{errors.email}</Alerta>
                  ) : null }
                </div>

                <div className='mb-4'>
                  <label 
                    className='text-gray-800'
                    htmlFor='telefono'
                  >Telefono:</label>
                  <Field
                    id='telefono'
                    type='tel'
                    className='mt-2 block w-full p-3 bg-gray-50'
                    placeholder='Telefono del Cliente'
                    name='telefono'
                  />

                  { errors.telefono && touched.telefono ? (
                    <Alerta>{errors.telefono}</Alerta>
                  ) : null }
                </div>

                <div className='mb-4'>
                  <label 
                    className='text-gray-800'
                    htmlFor='notas'
                  >Notas:</label>
                  <Field
                    as='textarea'
                    id='notas'
                    type='text'
                    className='mt-2 block w-full p-3 bg-gray-50 h-40'
                    placeholder='Notas del Cliente'
                    name='notas'
                  />

                  <input 
                    type="submit" 
                    value='Agregar Cliente'
                    className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg' 
                  />
                </div>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}

export default Formulario;