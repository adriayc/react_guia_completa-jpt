import React from 'react';
// Impotar router
import { useRouter } from 'next/router';
// Impotar layout component
import Layout from '../components/layouts/Layout';

const Buscar = () => {
  const router = useRouter();
  // const { query } = router;
  const { query: { q } } = router;
  // console.log(router);
  // console.log(query);
  // console.log(q);

  return (
    <div>
      <Layout>
        <h1>Buscar</h1>
      </Layout>
    </div>
  );
}

export default Buscar;