import { useState, useEffect, createContext } from "react"
// Importar settings
import clienteAxios from "../config/clienteAxios"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [ auth, setAuth ] = useState({})

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem('token')
      // console.log(token)

      if (!token) {
        return
      }

      // console.log('Si hay Token')
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      try {
        // Llamamos la API y le pasamos el config de headers
        const { data } = await clienteAxios('/usuarios/perfil', config)

        // console.log(data)
        setAuth(data)
      } catch (error) {
        
      }
    }
    autenticarUsuario()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthProvider
}
export default AuthContext