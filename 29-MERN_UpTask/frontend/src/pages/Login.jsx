const Login = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Inicia sesión y administra tus <span className="text-slate-700">proyectos</span></h1>

      <form className="bg-white shadow rounded-lg my-10 p-10">
        <div className="my-5">
          <label htmlFor="email" className="text-gray-600 text-xl font-bold block uppercase">Email</label>
          <input 
            type="email"
            placeholder="Email de Registro"
            id="email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <div className="my-5">
          <label htmlFor="password" className="text-gray-600 text-xl font-bold block uppercase">Password</label>
          <input 
            type="password"
            placeholder="Password de Registro"
            id="password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input 
          type="submit" 
          value="Iniciar Sesión"
          className="bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
    </>
  )
}

export default Login