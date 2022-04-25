import React from 'react';
import styled from '@emotion/styled';

// Importar custom hooks
import useSelectMonedas from '../hooks/useSelectMonedas';

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
    transition: background-color .3s ease;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

const Formulario = () => {
  // Llamar un custom hooks
  const [ SelectMonedas ] = useSelectMonedas('Elige tu Moneda');
  // Podemos reutilizar nuestro hook
  // const [ SelectCriptomonedas ] = useSelectMonedas('Elige tu Criptomoneda');

  return (
    <form>
      <SelectMonedas />
      {/* <SelectCriptomonedas /> */}

      <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

export default Formulario