import { useContext, useEffect } from "react";
// Links
import Link from "next/link";
// Contexts
import authContext from "../context/auth/authContext";
// Components
import Layout from "../components/Layout";
import Dropzone from "../components/Dropzone";

const Index = () => {
  // Definir el context
  const AuthContext = useContext(authContext);
  const { usuarioAutenticado } = AuthContext;

  useEffect(() => {
    usuarioAutenticado();
    
  }, [])

  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        <div className="lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10">
          {/* Dropzone */}
          <Dropzone />
          
          <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
            <h2 className="text-4xl font-sans font-bold text-gray-800 my-4">Compartir archivos de de form sencilla y privada</h2>
            <p className="text-lg leading-loose">
              <span className="text-red-500 font-bold">ReactNodeSend</span> te permite compartir archivos con cifrado de extremo a extremo y un archivo que es elminado después de ser descargado. Así que puedes mantener lo que compartes en privado y asegurarte de que tus cosas no permanezcan en línea para siempre.
            </p>
            <Link href="/crearcuenta">
              {/* Error! */}
              {/* <a className="text-red-500 font-bold text-lg hover:text-red-700">Crea una cuenta para mayores beneficios</a> */}
              <span className="text-red-500 font-bold text-lg hover:text-red-700">Crea una cuenta para mayores beneficios</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index;