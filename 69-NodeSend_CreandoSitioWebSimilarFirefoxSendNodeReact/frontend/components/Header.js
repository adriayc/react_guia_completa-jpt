import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// Contexts
import authContext from "../context/auth/authContext";
const Header = () => {
    // Definir el context
    const AuthContext = useContext(authContext);
    const { usuarioAutenticado, usuario, cerrarSesion } = AuthContext;

    useEffect(() => {
      usuarioAutenticado();
      
    }, [])

  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      {/* <img src="logo.svg" className="w-64 mf:mb-0" /> */}
      <Link href='/'>
        <Image src='/logo.svg' width={256} height={47} alt="Logo" />
      </Link>

      <div>
        {/* Error */}
        {/* <Link href=''>
          <a className="bg-red-500">Iniciar Sesión</a>
        </Link> */}
        
        {usuario ? (
          <div className="flex items-center">
            <p className="mr-2">Hola {usuario.nombre}</p>
            <button 
              type="button"
              className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
              onClick={() => cerrarSesion()}
            >Cerrar Sesión</button>
          </div>
        ) : (
          <>
            <Link href="/login" className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">Iniciar Sesíon</Link>
            <Link href="/crearcuenta" className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">Crear Cuenta</Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Header;