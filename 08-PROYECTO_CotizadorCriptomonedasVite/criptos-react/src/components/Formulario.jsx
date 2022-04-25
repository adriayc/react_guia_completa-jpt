import React from 'react';
import styled from '@emotion/styled';

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

const Formulario = () => {
  // Llamar un custom hooks
  const [ SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas);

  return (
    <form>
      <SelectMonedas />

      <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

export default Formulario