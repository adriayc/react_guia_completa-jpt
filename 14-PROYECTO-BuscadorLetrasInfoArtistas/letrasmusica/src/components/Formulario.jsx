import { useState } from "react"

const Formulario = () => {

  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: ''
  });

  return (
    <form>
      <legend>Buscar por Artista y Canción</legend>

      <div className="form-grid">
        <div>
          <label htmlFor="">Artista</label>
          <input 
            type="text"
            name="artista"
            placeholder="Nombre Artista"
            value={busqueda.artista}
            onChange={e => setBusqueda({
              ...busqueda,
              [e.target.name]: e.target.value
            })} />
        </div>

        <div>
          <label htmlFor="">Canción</label>
          <input 
            type="text"
            name="cancion"
            placeholder="Nombre Canción"
            value={busqueda.cancion}
            onChange={e => setBusqueda({
              ...busqueda,
              [e.target.name]: e.target.value
            })} />
        </div>

        <input type="submit" value="Buscar" />
      </div>
    </form>
  )
}

export default Formulario