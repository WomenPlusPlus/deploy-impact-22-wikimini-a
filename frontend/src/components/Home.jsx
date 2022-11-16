import { useNavigate } from 'react-router-dom'
import { getRoutePath } from '../routes/route-utils'
import Grid from '@mui/material/Grid'
import Grow from '@mui/material/Grow'
import SearchBar from './SearchBar'
import { homeBoxesDataOwlets, homeBoxesDataOwls } from '../utils/homeBoxesData'
import { ImageInBox, TextInBox, PaperBox, OwlsImgBox } from '../styles/Home'
import { useContext } from 'react'
import ActiveContext from '../context'

const Home = () => {
  const navigate = useNavigate()
  const { active } = useContext(ActiveContext)

  const handleRedirects = (id) => {
    if (id === 'article') navigate(getRoutePath('ARTICLES'))
    if (id === 'writer') navigate(getRoutePath('WRITER'))
    if (id === 'dictionary') navigate(getRoutePath('DICTIONARY'))
  }

  return (
    <>
      <SearchBar />
      <Grid
        sx={{ flexGrow: 1, width: '100%', marginTop: '1rem' }}
        container
        spacing={1}
      >
        {active === 'owlets' ? (
          <Grid item xs={12}>
            <Grid container justifyContent='center' spacing={2}>
              {homeBoxesDataOwlets.map(
                ({ id, title, image, textColor, backgroundColor }, index) => (
                  <Grow
                    key={id}
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    timeout={600 * (index + 1)}
                  >
                    <Grid item onClick={() => handleRedirects(id)}>
                      <PaperBox backgroundcolor={backgroundColor} elevation={3}>
                        <TextInBox textcolor={textColor}>{title}</TextInBox>
                        <ImageInBox src={image} alt={title} id={id} />
                      </PaperBox>
                    </Grid>
                  </Grow>
                )
              )}
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Grid container justifyContent='center' spacing={2}>
              {homeBoxesDataOwls.map(({ id, image }, index) => (
                <Grow
                  key={id}
                  in={true}
                  style={{ transformOrigin: '0 0 0' }}
                  timeout={600 * (index + 1)}
                >
                  <Grid item onClick={() => handleRedirects(id)}>
                    <OwlsImgBox src={image} alt={id} />
                  </Grid>
                </Grow>
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default Home
