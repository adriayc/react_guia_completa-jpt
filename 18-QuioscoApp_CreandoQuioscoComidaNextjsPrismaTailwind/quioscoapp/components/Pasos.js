const pasos = [
  { paso: 1, nombre: 'Menú', url: '/' },
  { paso: 2, nombre: 'Resumen', url: '/resumen' },
  { paso: 3, nombre: 'Datos y Total', url: '/total' },
]

const Pasos = () => {
  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map(paso => (
          <button
            key={paso.id}
            type="button"
            className="text-2xl font-bold"
          >
            {paso.nombre}
          </button>
        ))}
      </div>
    </>
  )
}

export default Pasos