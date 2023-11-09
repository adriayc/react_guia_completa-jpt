import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      {/* <img src="logo.svg" className="w-64 mf:mb-0" /> */}
      <Link href='/'>
        <Image src='logo.svg' width={256} height={47} alt="Logo" />
      </Link>

      <div>
        {/* Error */}
        {/* <Link href=''>
          <a className="bg-red-500">Iniciar Sesión</a>
        </Link> */}
        <Link href="/login" className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">Iniciar Sesíon</Link>
        <Link href="/crearcuenta" className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">Crear Cuenta</Link>
      </div>
    </header>
  )
}

export default Header;