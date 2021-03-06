import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Error from './Error';

// Importar custom hooks
import useSelectMonedas from '../hooks/useSelectMonedas';

// Importa la data
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
    width: 100%;
    color: #FFF;
    background-color: #9497FF;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  // Llamar un custom hooks y extraemos con destructuring de arreglos el moneda (state) y SelectMonedas
  // const [ state, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas);
  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas);
  const [ criptomoneda, SelectCroptomoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptos);

  // UseEffect que se ejecuta una sola vez
  useEffect(() => {
    const consultarAPI = async () => {
      // Pagina de la API -> https://min-api.cryptocompare.com/
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const respuesta = await fetch(url);
      // console.log(respuesta);
      const resultado = await respuesta.json();
      // console.log(resultado);
      // console.log(resultado.Data);

      const arrayCriptos = resultado.Data.map(cripto => {
        // console.log(cripto.CoinInfo);
        // console.log(cripto.CoinInfo.FullName);
        // console.log(cripto.CoinInfo.Name);

        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        };
        // console.log(objeto);

        return objeto;
      });
      // console.log(arrayCriptos);

      setCriptos(arrayCriptos);
    };

    // Llamar al funcion
    consultarAPI();
  }, []);     // [] hace que se ejecuta una sola vez

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('Enviando formulario');
    // console.log(moneda);
    // console.log(criptomoneda);

    if([moneda, criptomoneda].includes('')) {
      // console.log('Error');
      setError(true);

      return;
    }
    setError(false);

    setMonedas({
      moneda,
      criptomoneda
    });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}

      <form
        onSubmit={handleSubmit}
      >
        <SelectMonedas />

        {/* Mostramos el codigo de moneda (state) */}
        {/* { moneda } */}

        <SelectCroptomoneda />

        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  )
}

export default Formulario