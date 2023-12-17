// Layouts
import Layout from "../../components/Layout";
// Cliente axios
import clienteAxios from "../../config/axios";

// Respuesta que obtenemos
// StaticProps
// export async function getStaticProps(props) {
// export async function getStaticProps({params}) {
// ServerSideProps
export async function getServerSideProps({params}) {
  // console.log(props);
  const { enlace } = params;
  console.log(enlace);
  // const resultado = await clienteAxios.get('/api/enlaces/vIUlvvbAs');
  const resultado = await clienteAxios.get(`/api/enlaces/${enlace}`);
  // console.log(resultado);

  return {
    props: {
      enlace: resultado.data
    }
  };
};

// Routing para obtener diferentes URL
// StaticPaths
// export async function getStaticPaths() {
// ServerSidePaths
export async function getServerSidePaths() {
  const enlaces = await clienteAxios.get('/api/enlaces');
  // console.log(enlaces.data.enlaces);

  return {
    // paths: [],
    paths: enlaces.data.enlaces.map(enlace => ({
      params: {enlace: enlace.url}
    })),
    // False para que sean URLs validas
    fallback: false
  };
};

// export default () => {
const Enlace =  ({enlace}) => {
  console.log(enlace);

  return (
    <Layout>
      <h1>Desde [enlace].js</h1>
    </Layout>
  );
};

export default Enlace;