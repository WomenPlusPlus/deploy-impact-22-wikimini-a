import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'
import SearchBar from './SearchBar'
import { homeBoxesData } from '../utils/homeBoxesData'
import { ImageInBox, TextInBox, ButtonFolder, PaperBox } from '../styles/Home'
import { green } from '../theme/colors'

const Home = () => {
  return (
      <Box
        sx={{
          height: '100%',
        }}
      >
        <Box
          sx={{
            paddingTop: '40px',
          }}
        >
          <Stack direction='row' justifyContent='flex-end' spacing={2}>
            <ButtonFolder>Kids</ButtonFolder>
            <ButtonFolder right>Students</ButtonFolder>
          </Stack>
        </Box>
        <Box
          sx={{
            height: 'calc(100% - 88px)',
            borderRadius: '3% 3% 0px 0px',
            backgroundColor: green,
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
  )
}

export default Home
