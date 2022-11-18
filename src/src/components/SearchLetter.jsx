import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import { white, yellow } from '../theme/colors'
import { Typography } from '@mui/material'
import backButton from '../assets/backButton.svg'
import { getRoutePath } from '../routes/route-utils'

const endpoint =
  'https://api.wikimedia.org/core/v1/wikipedia/en/search/title?limit=15'
// const endpoint = 'http://192.168.64.2/api.php'
const params = {
  limit: 10,
}

const SearchLetter = () => {
  const [searchResults, setSearchResults] = useState([])
  const { letter } = useParams()
  const navigate = useNavigate()

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
    <>
      <img
        src={backButton}
        style={{
          width: '22px',
          position: 'absolute',
          left: '30px',
          top: '210px',
          cursor: 'pointer',
        }}
        onClick={() => navigate(getRoutePath('ARTICLES'))}
      />
      <Typography
        sx={{
          fontFamily: 'Futura',
          fontStyle: 'normal',
          fontWeight: 900,
          fontSize: '138px',
          lineHeight: '58px',
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
            <div key={id}>
              <ListItem
                button
                onClick={() => {
                  navigate(`/article/${title}/1`)
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Futura',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '24px',
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
    </>
  )
}

export default SearchLetter
