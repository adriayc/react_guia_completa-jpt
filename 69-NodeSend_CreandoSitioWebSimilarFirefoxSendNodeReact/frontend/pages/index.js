import { useContext, useEffect } from "react";
// Contexts
import authContext from "../context/auth/authContext";
// Components
import Layout from "../components/Layout"

const Index = () => {
  // Definir el context
  const AuthContext = useContext(authContext);
  const { usuarioAutenticado } = AuthContext;

  useEffect(() => {
    usuarioAutenticado();
    
  }, [])

  return (
    <Layout>
      <h1>Index</h1>
    </Layout>
  )
}

export default Index;