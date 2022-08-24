// Importar el provedor de noticas
import { NoticiasProvider } from './context/NoticiasProvider';
// Importar componentes de MUI
// OPCION #1 de importar (recomendada por MUI)
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// OPCION #2 de importar
import { Container, Grid, Typography } from '@mui/material';
// Importar componentes
import Formulario from './components/Formulario';

function App() {

  return (
    // Rodeamos el container con componente de Provider
    <NoticiasProvider>
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

        {/* Agregamos un Grid */}
        <Grid 
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          {/* Agregamos otro Grid con el prop item y establecemos media queries con sx, md y lg */}
          <Grid item xs={12} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>
      </Container>
    </NoticiasProvider>
  )
}

export default App;