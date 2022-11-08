import Box from '@mui/material/Box'
import SearchBar from './SearchBar'
import { white } from '../theme/colors'
import { resultArticles } from '../utils/mockups'
import SearchResultContainer from './SearchResultContainer'
import { Grid, Typography } from '@mui/material'
import { searchBoxesData } from '../utils/searchBoxesData'
import { ImageInBoxSearch, PaperBoxSearch, TextInBoxSearch } from '../styles/SearchResults'
import { ImageInBox, PaperBox, TextInBox } from '../styles/Home'
import { homeBoxesData } from '../utils/homeBoxesData'

const SearchResults = () => {
    
    return(
      <>
        <SearchBar />
        <Box sx={{
            width: '100%',
            borderRadius: '10px 10px 10px 10px',
            backgroundColor: white,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            filter: 'drop-shadow(0px 5px 8px rgba(0, 0, 0, 0.25))',
            marginTop: '10px',            
            paddingBottom: '16px',
            zIndex: 1,
        }}>
            {resultArticles.length > 0 ? (
              <>
                {resultArticles.map(item => <SearchResultContainer item={item} key={item.id} />)}
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '17px',
                    textAlign: 'center',
                    fontFamily: 'Futura',
                    marginTop: '19px',
                  }}
                >
                  You didn&#39;t find what you were looking for?
                </Typography>
              </>)
              :
              (
                <Typography 
                  sx={{
                    fontFamily: 'Futura',
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '18px',
                    textAlign: 'center',
                    marginTop: '10px',
                    marginBottom: '10px',
                  }}>
                  Hmm... nothing on <span></span> yet.
                </Typography>
              )}
            <Typography 
              sx={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '26px',
                textAlign: 'center',
                marginTop: '10px',
                marginBottom: '10px',
              }}>
                Let&#39;t change it!
            </Typography>
            <Grid container justifyContent='center' spacing={1}>
              {searchBoxesData.map(({ id, title, image, textColor, backgroundColor }, index) => (
                  <Grid
                    item
                    key={id}
                  >
                    <PaperBoxSearch backgroundcolor={backgroundColor}>
                      <TextInBoxSearch textcolor={textColor}>{title}</TextInBoxSearch>
                      <ImageInBoxSearch src={image} alt={title} id={id} />
                    </PaperBoxSearch>
                  </Grid>
              ))}
            </Grid>
        </Box>
        {resultArticles.length === 0 && (
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              position: 'relative',
              bottom: 50
            }}>
            <PaperBox backgroundcolor={homeBoxesData[2].backgroundColor}>
              <TextInBox>&nbsp;</TextInBox>
              <ImageInBox src={homeBoxesData[2].image} alt={homeBoxesData[2].title} id={homeBoxesData[2].id} />
            </PaperBox>
            <PaperBox backgroundcolor={homeBoxesData[3].backgroundColor}>
              <TextInBox>&nbsp;</TextInBox>
              <ImageInBox src={homeBoxesData[3].image} alt={homeBoxesData[3].title} id={homeBoxesData[3].id} />
            </PaperBox>
          </Box>
        )}
      </>
    )
}

export default SearchResults;