import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { ButtonFolder } from '../styles/Home'
import { green, white, yellow } from '../theme/colors'
import { Typography } from '@mui/material'

const endpoint =
  'https://api.wikimedia.org/core/v1/wikipedia/en/search/title?q=earth&limit=5'
// const endpoint = 'http://192.168.64.2/api.php'
const params = {
  limit: 10,
}

const SearchLetter = () => {
  const [searchResults, setSearchResults] = useState([])
  const { letter } = useParams()

  params.q = letter

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(endpoint, { params })
        setSearchResults(data.pages)
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
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 900,
            fontSize: '138px',
            lineHeight: '58px',
            textAlign: 'center',
            margin: '4rem',
            color: yellow,
          }}
          variant='h3'
        >
          {letter}
        </Typography>
        <List sx={{ height: '80%', width: '96%', overflow: 'auto' }}>
          {searchResults.map(({ id, title }) => {
            return (
              <>
                <ListItem key={id} button>
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
              </>
            )
          })}
        </List>
      </Box>
    </Box>
  )
}

export default SearchLetter
