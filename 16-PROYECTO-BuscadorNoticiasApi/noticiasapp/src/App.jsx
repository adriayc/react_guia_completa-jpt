// Importar componentes de MUI
// OPCION #1 de importar (recomendada por MUI)
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// OPCION #2 de importar
import { Container, Grid, Typography } from '@mui/material';

function App() {

  return (
    <Container>
      <header>
        {/* Props como marginY no esta definidas */}
        {/* <Typography align='center' marginY={15}>Buscador de Noticias</Typography> */}

        {/* Props xs para personalizar con CSS */}
        {/* <Typography align='center' sx={{
          fontWeight: 'bold'
        }}>Buscador de Noticias</Typography> */}

        <Typography align='center' marginY={5} component='h1' variant='h3'>Buscador de Noticias</Typography>
      </header>
    </Container>
  )
}

export default App;