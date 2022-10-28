import Letters from './Letters'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'
import SearchBar from './SearchBar'
import { ButtonFolder } from '../styles/Home'
import { green, white, blue, lightBlue } from '../theme/colors'
import { Typography } from '@mui/material'
import { articlesCategories } from '../utils/articlesCategories'

const Articles = () => {
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
          paddingTop: '2rem',
        }}
      >
        <Stack
          sx={{ height: 'calc(100% - 88px)' }}
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={20}
        >
          <Box sx={{ paddingTop: '4rem' }}>
            <Letters />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '38px',
                lineHeight: '58px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: white,
                margin: '2rem',
              }}
              variant='h3'
            >
              Articles
            </Typography>
            <SearchBar />
            <Grid
              sx={{ flexGrow: 1, width: 520, marginTop: '1rem' }}
              container
              spacing={1}
            >
              <Grid item xs={12}>
                <Grid container justifyContent='center' spacing={2}>
                  {articlesCategories.map(({ title }, index) => (
                    <Grow
                      key={index}
                      in={true}
                      style={{ transformOrigin: '0 0 0' }}
                      timeout={600 * (index + 1)}
                    >
                      <Grid item>
                        <Paper
                          sx={{
                            height: 150,
                            width: 148,
                            backgroundColor: green,
                            borderRadius: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: '1rem',
                            border: `3.91304px solid ${lightBlue}`,
                            '&:hover': {
                              boxShadow:
                                'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
                              height: 160,
                              width: 158,
                              transition: '.3s',
                              cursor: 'pointer',
                            },
                          }}
                          elevation={3}
                        >
                          <Typography
                            sx={{
                              width: '100%',
                              fontFamily: 'Inter',
                              fontStyle: 'normal',
                              fontWeight: 700,
                              fontSize: '18px',
                              lineHeight: '58px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              textAlign: 'center',
                              color: blue,
                              background: lightBlue,
                              marginBottom: '1.5rem',
                              borderRadius: '5px',
                            }}
                          >
                            {title}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grow>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Articles
