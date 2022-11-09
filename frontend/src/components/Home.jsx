import { useNavigate } from 'react-router-dom'
import { getRoutePath } from '../routes/route-utils'
import Grid from '@mui/material/Grid'
import Grow from '@mui/material/Grow'
import SearchBar from './SearchBar'
import { homeBoxesData } from '../utils/homeBoxesData'
import { ImageInBox, TextInBox, PaperBox } from '../styles/Home'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <SearchBar />
      <Grid
        sx={{ flexGrow: 1, width: '100%', marginTop: '1rem' }}
        container
        spacing={1}
      >
        <Grid item xs={12}>
          <Grid container justifyContent='center' spacing={2}>
            {homeBoxesData.map(({ id, title, image, textColor, backgroundColor }, index) => (
              <Grow
                key={id}
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                timeout={600 * (index + 1)}
              >
                <Grid
                  item
                  onClick={() =>
                    id === 'article' ? navigate(getRoutePath('ARTICLES')) : null
                  }
                >
                  <PaperBox backgroundcolor={backgroundColor} elevation={3}>
                    <TextInBox textcolor={textColor}>{title}</TextInBox>
                    <ImageInBox src={image} alt={title} id={id} />
                  </PaperBox>
                </Grid>
              </Grow>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
