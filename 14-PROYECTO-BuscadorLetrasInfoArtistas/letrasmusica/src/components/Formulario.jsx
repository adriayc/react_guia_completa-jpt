import { useState } from "react"
// Importar custom hook useLetras
import useLetras from "../hooks/useLetras";

const Formulario = () => {

  const { setAlerta, busquedaLetra } = useLetras();

  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    // Validando el objeto que tenga valores de los atributos vacios
    if(Object.values(busqueda).includes('')) {
      setAlerta('Coloca nombre de artista y canción');
      return;
    }
    // Establecer el valor por defecto
    setAlerta('');

    busquedaLetra(busqueda);
  }; 

  return (
    <form
      onSubmit={handleSubmit}
    >
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