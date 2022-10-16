import Image from "next/image"
// Importar custom hook
import useQuiosco from "../hooks/useQuiosco"
// Importar helper
import { formatearDinero } from "../helpers"

const ModalProducto = () => {
  const { producto, handleChangeModal } = useQuiosco()

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={`Imagen producto ${producto.nombre}`}
        />
      </div>

      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleChangeModal}
          >
            {/* URL icono: https://heroicons.com/ */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatearDinero(producto.precio)}
        </p>
      </div>
    </div>
  )
}

export default ModalProducto