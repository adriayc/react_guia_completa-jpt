import React from 'react';
// Importar styled components
import styled from '@emotion/styled';
// Importar layout
import Layout from '../components/layout/layout';


// Styled components
const Heading = styled.h1`
  color: red;
`;

const Nosotros = () => (
  <div>
    <Layout>
      <h1>Nosotros</h1>
    </Layout>
  </div>
);

export default Nosotros;