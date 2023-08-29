import React from 'react';
// Importar styled emotion
import styled from '@emotion/styled';
// Impotar layout component
import Layout from '../components/layouts/Layout';

const Heading = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <div>
      <Layout>
        <Heading>Inicio</Heading>
      </Layout>
    </div>
  );
}

export default Home;