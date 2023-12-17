// Layouts
import Layout from "../../components/Layout";
// Cliente axios
import clienteAxios from "../../config/axios";

// Respuesta que obtenemos
export async function getStaticProps() {
  const resultado = await clienteAxios.get('/api/enlaces/vIUlvvbAs');
  // console.log(resultado);

  return {
    props: {
      enlace: resultado.data
    }
  };
};

// Routing para obtener diferentes URLs
export async function getStaticPaths() {
  const enlaces = await clienteAxios.get('/api/enlaces');
  console.log(enlaces.data.enlaces);

  return {
    // paths: [],
    paths: enlaces.data.enlaces.map(enlace => ({
      params: {enlace: enlace.url}
    })),
    fallback: false
  };
};

// export default () => {
const Enlace =  ({enlace}) => {
  // console.log(enlace);

  return (
    <Layout>
      <h1>Desde [enlace].js</h1>
    </Layout>
  );
};

export default Enlace;