import React from 'react';
// Importar styled components
import styled from '@emotion/styled';
// Importar layout
import Layout from '../components/layout/layout';


// Styled components
const Heading = styled.h1`
  color: red;
`;

const Home = () => (
  <div>
    <Layout>
      <h1>Inicio</h1>
      {/* Add the styled components */}
      {/* <Heading>Inicio</Heading> */}
    </Layout>
  </div>
);

export default Home;