import { useRouter } from "next/router"
// Importar custom hook
import useQuiosco from "../hooks/useQuiosco"

const pasos = [
  { paso: 1, nombre: 'Menú', url: '/' },
  { paso: 2, nombre: 'Resumen', url: '/resumen' },
  { paso: 3, nombre: 'Datos y Total', url: '/total' },
]

const Pasos = () => {
  const router = useRouter()
  const { handleChangePaso/*, paso*/ } = useQuiosco()

  const calcularProgreso = () => {
    // const porcentaje = (paso / 3) * 100
    // // console.log(porcentaje)
    // return porcentaje

    // return (paso / 3) * 100;

    let valor
    if (router.pathname === '/') {
      valor = 2
    } else if (router.pathname === '/resumen') {
      valor = 50
    } else {
      valor = 100
    }

    return valor
  }

  // console.log(paso)

  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map(paso => (
          <button
            key={paso.paso}
            type="button"
            className="text-2xl font-bold"
            onClick={() => {
              router.push(paso.url)
              // handleChangePaso(paso.paso)
            }}
          >
            {paso.nombre}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10"
          style={{ width: `${calcularProgreso()}%` }}
        ></div>
      </div>
    </>
  )
}

export default Pasos