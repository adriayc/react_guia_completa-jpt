// Importar el custom hook useNoticias
import useNoticias from '../hooks/useNoticias';
// Importar componentes de MUI
import { FormControl, InputLabel, Select, MenuItem/*, Button, Box*/ } from '@mui/material';

// Variables
const CATEGORIAS = [
  { value: 'general', label: 'General'},
  { value: 'business', label: 'Negocios'},
  { value: 'entertainment', label: 'Entretenimiento'},
  { value: 'health', label: 'Salud'},
  { value: 'science', label: 'Ciencia'},
  { value: 'sports', label: 'Deportes'},
  { value: 'technology', label: 'Tecnología'},
];

const Formulario = () => {

  const { categoria, handleChangeCategoria } = useNoticias();

  return (
    <form>
      {/* Prop fullWith para usar todo el ancho */}
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select 
          label='Categoría'
          value={categoria}
          onChange={handleChangeCategoria}
        >
          {CATEGORIAS.map(categoria => (
            <MenuItem
              key={categoria.value}
              value={categoria.value}
            >
              {categoria.label}
            </MenuItem>
          ))}
        </Select>

        {/* Box = div */}
        {/* <Box sx={{ marginTop: 2 }}>
          <Button 
            fullWidth
            variant='contained'
            color='primary'
          >Buscar Noticias</Button>
        </Box> */}
      </FormControl>
    </form>
  )
}

export default Formulario;