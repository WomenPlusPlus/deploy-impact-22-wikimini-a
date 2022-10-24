import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'
import SearchBar from './SearchBar'
import { homeBoxesData } from '../utils/homeBoxesData'
import { ImageInBox, TextInBox, ButtonFolder, PaperBox } from '../styles/Home'

const Home = () => {
  return (
    <Container
      disableGutters={true}
      sx={{
        height: '100%',
        minWidth: '100%',
      }}
    >
      <Box
        sx={{
          height: '100%',
        }}
      >
        <Box
          sx={{
            paddingTop: '100px',
          }}
        >
          <Stack direction='row' justifyContent='flex-end' spacing={2}>
            <ButtonFolder>Kids</ButtonFolder>
            <ButtonFolder right>Students</ButtonFolder>
          </Stack>
        </Box>
        <Box
          sx={{
            height: 'calc(100% - 148px)',
            borderRadius: '3% 3% 0px 0px',
            backgroundColor: '#0CB3A1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '6rem',
          }}
        >
          <SearchBar />
          <Grid
            sx={{ flexGrow: 1, width: 620, marginTop: '1rem' }}
            container
            spacing={1}
          >
            <Grid item xs={12}>
              <Grid container justifyContent='center' spacing={2}>
                {homeBoxesData.map(({ id, title, image }, index) => (
                  <Grow
                    key={id}
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    timeout={600 * (index + 1)}
                  >
                    <Grid item>
                      <PaperBox elevation={3}>
                        <TextInBox>{title}</TextInBox>
                        <ImageInBox src={image} alt={title} id={id} />
                      </PaperBox>
                    </Grid>
                  </Grow>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
