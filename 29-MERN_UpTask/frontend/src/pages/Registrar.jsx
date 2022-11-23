import { useState } from 'react'
import { Link } from 'react-router-dom'

const Registrar = () => {
  const [ nombre, setNombre ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ repetirPassword, setRepetirPassword ] = useState('')

  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>Crea tu Cuenta y Administra tus <span className='text-slate-700'>proyectos</span></h1>

      <form className='my-10 bg-white shadow rounded-lg p-10'>
        <div className='my-5'>
          <label htmlFor="nombre" className='text-gray-600 text-xl font-bold uppercase block'>Nombre</label>
          <input 
            type="text" 
            placeholder='Tu Nombre'
            id='nombre'
            className='w-full mt-3 p-3 border rounded-xl bd-gray-50'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label htmlFor="email" className="text-gray-600 text-xl font-bold block uppercase">Email</label>
          <input 
            type="email"
            placeholder="Email de Registro"
            id="email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label htmlFor="password" className="text-gray-600 text-xl font-bold block uppercase">Password</label>
          <input 
            type="password"
            placeholder="Password de Registro"
            id="password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label htmlFor="password2" className="text-gray-600 text-xl font-bold block uppercase">Repetir Password</label>
          <input 
            type="password"
            placeholder="Repetir tu Password"
            id="password2"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={repetirPassword}
            onChange={e => setRepetirPassword(e.target.value)}
          />
        </div>

        <input 
          type="submit" 
          value="Crear Cuenta"
          className="bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className='lg:flex lg:justify-between'>
        <Link
          to='/'
          className='block text-center my-5 text-slate-500 uppercase text-sm'
        >¿Ya tienes una cuenta? Inicia Sesión</Link>

        <Link
          to='/olvide-password'
          className='block text-center my-5 text-slate-500 uppercase text-sm'
        >Olvide Mi Password</Link>
      </nav>
    </>
  )
}

export default Registrar