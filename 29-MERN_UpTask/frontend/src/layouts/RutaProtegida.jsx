import { Outlet, Navigate } from "react-router-dom"
// Impotar custom hooks
import useAuth from "../hooks/useAuth"

const RutaProtegida = () => {
  const { auth } = useAuth()
  console.log(auth)

  return (
    <>
      {/* {auth._id ? 'Autenticado' : 'No Autenticado'} */}
      {auth._id ? 'Autenticado' : <Navigate to='/' />}
    </>
  )
}

export default RutaProtegida