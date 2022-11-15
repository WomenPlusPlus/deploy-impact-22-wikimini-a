import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import SearchBar from './SearchBar'
import { white } from '../theme/colors'
import { resultArticles } from '../utils/mockups'
import SearchResultContainer from './SearchResultContainer'
import { Grid, Typography } from '@mui/material'
import { searchBoxesData } from '../utils/searchBoxesData'
import {
  ImageInBoxSearch,
  PaperBoxSearch,
  TextInBoxSearch,
} from '../styles/SearchResults'
import { ImageInBox, PaperBox, TextInBox } from '../styles/Home'
import { homeBoxesDataOwlets, homeBoxesDataOwls } from '../utils/homeBoxesData'
import ActiveContext from '../context'

const SearchResults = () => {
  const [searchResult, setSearchResult] = useState([])
  const { item } = useParams()
  const { active } = useContext(ActiveContext)

  useEffect(() => {
    const getData = async () => {
      const encodedEndpoint = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=pageimages|extracts&titles=art&explaintext=&exintro&titles=${item}`

      try {
        const { data } = await axios.get(encodedEndpoint)
        const results = Object.values(data.query.pages).map(
          ({ title, pageid, thumbnail }) => ({
            category: 'article: ',
            pageid,
            title,
            image: thumbnail ? thumbnail.source : null,
          })
        )
        setSearchResult(results)
      } catch (error) {
        throw new Error(error)
      }
    }

    getData()
  }, [item])

  return (
    <>
      <SearchBar />
      <Box
        sx={{
          width: '100%',
          borderRadius: '10px 10px 10px 10px',
          backgroundColor: white,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          filter: 'drop-shadow(0px 5px 8px rgba(0, 0, 0, 0.25))',
          marginTop: '1rem',
          paddingBottom: '16px',
          zIndex: 1,
        }}
      >
        {searchResult.length ? (
          <>
            {searchResult.map((item) => (
              <SearchResultContainer item={item} key={item.id} />
            ))}
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
          </>
        ) : (
          <Typography
            sx={{
              fontFamily: 'Futura',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '18px',
              textAlign: 'center',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          >
            Hmm... nothing on <span></span> yet.
          </Typography>
        )}
        <Typography
          sx={{
            fontFamily: 'Futura',
            fontWeight: 700,
            fontSize: '22px',
            lineHeight: '26px',
            textAlign: 'center',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          Let&#39;s change it!
        </Typography>
        <Grid container justifyContent='center' spacing={1}>
          {searchBoxesData.map(
            ({ id, title, image, textColor, backgroundColor }) => (
              <Grid item key={id}>
                <PaperBoxSearch backgroundcolor={backgroundColor}>
                  <TextInBoxSearch textcolor={textColor}>
                    {title}
                  </TextInBoxSearch>
                  <ImageInBoxSearch src={image} alt={title} id={id} />
                </PaperBoxSearch>
              </Grid>
            )
          )}
        </Grid>
      </Box>
      {resultArticles.length === 0 && (
        
        active === 'owlets' ? <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          position: 'relative',
          bottom: 50,
        }}
      >
        <PaperBox backgroundcolor={homeBoxesDataOwlets[2].backgroundColor}>
          <TextInBox>&nbsp;</TextInBox>
          <ImageInBox
            src={homeBoxesDataOwlets[2].image}
            alt={homeBoxesDataOwlets[2].title}
            id={homeBoxesDataOwlets[2].id}
          />
        </PaperBox>
        <PaperBox backgroundcolor={homeBoxesDataOwlets[3].backgroundColor}>
          <TextInBox>&nbsp;</TextInBox>
          <ImageInBox
            src={homeBoxesDataOwlets[3].image}
            alt={homeBoxesDataOwlets[3].title}
            id={homeBoxesDataOwlets[3].id}
          />
        </PaperBox>
      </Box> :
      <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        position: 'relative',
        bottom: 50,
      }}
    >
      <PaperBox backgroundcolor={homeBoxesDataOwls[2].backgroundColor}>
        <TextInBox>&nbsp;</TextInBox>
        <ImageInBox
          src={homeBoxesDataOwls[2].image}
          alt={homeBoxesDataOwls[2].title}
          id={homeBoxesDataOwls[2].id}
        />
      </PaperBox>
      <PaperBox backgroundcolor={homeBoxesDataOwls[3].backgroundColor}>
        <TextInBox>&nbsp;</TextInBox>
        <ImageInBox
          src={homeBoxesDataOwls[3].image}
          alt={homeBoxesDataOwls[3].title}
          id={homeBoxesDataOwls[3].id}
        />
      </PaperBox>
    </Box>
      )}
    </>
  )
}

export default SearchResults
