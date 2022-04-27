import React from 'react'
import styled from '@emotion/styled';

const Texto = styled.div`
    color: #FFF;
    background-color: #B7322C;
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    padding: 15px;
`;

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error