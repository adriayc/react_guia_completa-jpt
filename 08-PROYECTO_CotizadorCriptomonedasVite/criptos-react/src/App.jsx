import { useState, useEffect } from 'react';

// Importar styled components
import styled from '@emotion/styled';

// Importar componentes
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

// Importar imagen
import ImagenCripto from './img/imagen-criptos.png';

const Contenedor = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  display: block;
  margin: 100px auto 0 auto;
`;

const Heading = styled.h1`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});

  // Se ejecuta cuando se realize cambios en monedas
  useEffect(() => {
    // console.log(monedas);

    // Validar que el objeto monedas no este vacio
    if(Object.keys(monedas).length > 0) {
      // console.log(monedas);

      const cotizarCripto = async () => {
        const {moneda, criptomoneda} = monedas;
        // Pagina de la API -> https://min-api.cryptocompare.com/
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        // console.log(url);

        const respuesta =  await fetch(url);
        const resultado = await respuesta.json();
        // console.log(resultado);
        // console.log(resultado.DISPLAY[criptomoneda][moneda]);         // Otra forma de acceder a objetos con atributos dinamicos

        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
      };

      cotizarCripto();
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen 
        src={ImagenCripto} 
        alt="Imagenes criptomonedas"
      />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Formulario 
          setMonedas={setMonedas}
        />

        {/* Mostrar el componente si existe el precio en el objeto resultado */}
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Contenedor>
  )
}

export default App
