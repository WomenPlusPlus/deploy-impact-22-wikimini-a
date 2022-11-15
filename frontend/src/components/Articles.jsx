import { useNavigate } from 'react-router-dom'
import Letters from './Letters'
import Grid from '@mui/material/Grid'
// import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'
import SearchBar from './SearchBar'
import { green, white, blue, lightBlue } from '../theme/colors'
import { Typography } from '@mui/material'
import { articlesCategories } from '../utils/articlesCategories'
import backButton from '../assets/backButton.svg'

const Articles = () => {
  const navigate = useNavigate()
  const handleSearchLetter = async (letter) => {
    navigate(`/search-letter/${letter}`)
  }
  return (
    <>
      <img src={backButton} style={{width: '22px', position: 'absolute', left: '30px', top: '210px', cursor: 'pointer'}} onClick={() => navigate(-1)} />
      <Typography
        sx={{
          fontFamily: 'Futura',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '38px',
          lineHeight: '58px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: white,
          marginBottom: '1rem',
        }}
        variant='h3'
      >
        Articles
      </Typography>
      <SearchBar />
      <Letters handleSearchLetter={handleSearchLetter} />
      <Box>
        <Grid
          sx={{
            flexGrow: 1,
            minHeight: '80vh',
            width: '100%',
            marginTop: '1rem',
          }}
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
                      onClick={() =>
                        navigate(`/search-category/${title.toLowerCase()}`)
                      }
                    >
                      <Typography
                        sx={{
                          width: '100%',
                          fontFamily: 'Futura',
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
      {/* // </Stack> */}
    </>
  )
}

export default Articles
