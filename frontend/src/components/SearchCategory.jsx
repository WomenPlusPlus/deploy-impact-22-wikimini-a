import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import { ButtonFolder } from '../styles/Home'
import { green, white, yellow } from '../theme/colors'
import { Typography } from '@mui/material'
import { categoryImages } from '../utils/categoryImages'

// const endpoint = 'http://192.168.64.2/api.php'
const endpoint = 'https://en.wikipedia.org/w/api.php'

const params = {
  origin: '*',
  action: 'query',
  list: 'categorymembers',
  cmlimit: '40',
  format: 'json',
}

const SearchCategory = () => {
  const [searchResults, setSearchResults] = useState([])
  const { category } = useParams()

  useEffect(() => {
    const getData = async () => {
      params.cmtitle = `Category:${category}`
      try {
        const { data } = await axios.get(endpoint, { params })
        setSearchResults(data.query.categorymembers)
      } catch (error) {
        throw new Error(error)
      }
    }
    getData()
  }, [])

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
          justifyContent: 'center',
        }}
      >
        <CardMedia
          component='img'
          image={categoryImages[category]}
          alt='green iguana'
          sx={{
            width: 120,
            height: 120,
            margin: '2rem',
            borderRadius: '50%',
            objectFit: 'cover',
            backgroundColor: yellow,
            // filter: 'contrast(400%) brightness(1)',
          }}
        />
        <List sx={{ height: '80%', width: '96%', overflow: 'auto' }}>
          {searchResults.map(({ title }, index) => {
            return (
              <div key={index}>
                <ListItem button>
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '24px',

                      textAlign: 'center',
                      color: white,
                      margin: '2rem',
                    }}
                    variant='h3'
                  >
                    {title}
                  </Typography>
                </ListItem>
                <Divider />
              </div>
            )
          })}
        </List>
      </Box>
    </Box>
  )
}

export default SearchCategory
