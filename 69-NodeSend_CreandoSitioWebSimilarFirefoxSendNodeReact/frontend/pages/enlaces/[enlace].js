// Layouts
import Layout from "../../components/Layout";
// Cliente axios
import clienteAxios from "../../config/axios";

// Respuesta que obtenemos
export async function getStaticProps() {};

// Routing para obtener diferentes URLs
export async function getStaticPaths() {

};

// export default () => {
const Enlace =  () => {
  return (
    <Layout>
      <h1>Desde [enlace].js</h1>
    </Layout>
  );
};

export default Enlace;