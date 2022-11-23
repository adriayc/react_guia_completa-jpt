import { Link } from 'react-router-dom'

const NuevoPassword = () => {
  return (
    <>
    <h1 className='text-sky-600 font-black text-6xl capitalize'>Reestablece tu password y no pierdas acceso a tus <span className='text-slate-700'>proyectos</span></h1>

    <form className='my-10 bg-white shadow rounded-lg p-10'>
      <div className="my-5">
        <label htmlFor="password" className="text-gray-600 text-xl font-bold block uppercase">Nuevo Password</label>
        <input 
          type="password"
          placeholder="Escribe tu nuevo Password"
          id="password"
          className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
        />
      </div>

      <input 
        type="submit" 
        value="Guardar Nuevo Password"
        className="bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
      />
    </form>
  </>
  )
}

export default NuevoPassword