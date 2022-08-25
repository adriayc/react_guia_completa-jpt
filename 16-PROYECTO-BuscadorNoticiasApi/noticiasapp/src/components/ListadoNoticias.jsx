// Importar el custom hook useNoticias
import useNoticias from "../hooks/useNoticias";
// Importar componentes de MUI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// Importar componentes
import Noticia from "./Noticia";

const ListadoNoticias = () => {

  const { noticias, totalNoticias } = useNoticias();
  // console.log(totalNoticias);

  const totalPaginas = Math.ceil(totalNoticias / 20);
  // console.log(totalPaginas);

  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={5}
        component={'h2'}
        variant={'h3'}
      >Últimas Noticias</Typography>

      <Grid
        container
        spacing={2}
      >
        {noticias.map(noticia => (
          <Noticia 
            key={noticia.url}
            noticia={noticia}
          />
        ))}
      </Grid>

      {/* Paginacion */}
      <Stack 
        spacing={2}
        direction={'row'}
        justifyContent='center'
        alignItems={'center'}
        sx={{ marginY: 5 }}
      >
        <Pagination count={totalPaginas} color="primary" />
      </Stack>
    </>
  )
}

export default ListadoNoticias;