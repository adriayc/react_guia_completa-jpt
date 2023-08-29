import React from 'react';
// Importar styled emotion
import styled from '@emotion/styled';

const Heading = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <div>
      <Heading>Inicio</Heading>

      {/* CSS en next.js */}
      {/* <style jsx>{`
        h1 {
          color: red;
        }
      `}</style> */}
    </div>
  );
}

export default Home;