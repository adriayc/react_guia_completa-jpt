import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      {/* <img src="logo.svg" className="w-64 mf:mb-0" /> */}
      <Image src='logo.svg' width={256} height={47} alt="Logo" />
    </header>
  )
}

export default Header;