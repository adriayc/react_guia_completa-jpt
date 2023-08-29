import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Inicio</h1>

      {/* CSS en next.js */}
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </div>
  );
}

export default Home;