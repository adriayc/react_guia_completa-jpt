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
  // console.log(enlace);
  // console.log(enlace.archivo);

  return (
    <Layout>
      <h1 className="text-4xl text-center text-gray-700">Descarga tu archivo:</h1>
      <div className="flex items-center justify-center mt-10">
        <a 
          // href={`${process.env.backendURL}/${enlace.archivo}`} 
          href={`${process.env.backendURL}/api/archivos/${enlace.archivo}`} 
          className="bg-red-500 text-center px-10 py-3 rounded uppercase text-white font-bold cursor-pointer"
          download
        >Aquí</a>
      </div>
    </Layout>
  );
};

export default Enlace;