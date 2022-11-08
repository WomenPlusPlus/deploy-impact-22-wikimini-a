import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import CardMedia from '@mui/material/CardMedia'
import { white, yellow } from '../theme/colors'
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
    <>
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
    </>
  )
}

export default SearchCategory
