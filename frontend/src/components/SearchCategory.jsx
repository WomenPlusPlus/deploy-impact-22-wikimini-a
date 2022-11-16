import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import CardMedia from '@mui/material/CardMedia'
import { white, yellow } from '../theme/colors'
import { Typography } from '@mui/material'
import backButton from '../assets/backButton.svg'
import { getRoutePath } from '../routes/route-utils'
import { articlesCategoriesOwlets, articlesCategoriesOwls } from '../utils/articlesCategories'
import ActiveContext from '../context'

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
  const { type, category } = useParams()
  const navigate = useNavigate()
  const { active } = useContext(ActiveContext);

  const getCategoryImage = () => {
    if(active === 'owlets')
     return articlesCategoriesOwlets.find((item) => item.title.toLowerCase() === category).image
    return articlesCategoriesOwls.find((item) => item.title.toLowerCase() === category).image
  }

 // const imagePosition = (active === 'owlets' && category === 'languages') ? '180px' : '187px';

  console.log(active === 'owlets' && category === 'languages')

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
      <img
        src={backButton}
        style={{
          width: '22px',
          position: 'absolute',
          left: '30px',
          top: '187px',
          cursor: 'pointer',
        }}
        onClick={() => navigate(getRoutePath('ARTICLES'))}
      />
      <Typography
        sx={{
          fontFamily: 'Futura',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '16px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: white,
          marginBottom: '1rem',
          textTransform: 'uppercase',
        }}
        variant='h3'
      >
        {type} / {category}
      </Typography>
      <CardMedia
        component='img'
        image={getCategoryImage()}
        alt='green iguana'
        sx={{
          width: 120,
          height: 120,
          margin: '2rem',
          borderRadius: '50%',
          objectFit: 'cover',
          backgroundColor: yellow,
          paddingBottom: '20px'
        }}
      />
      <List sx={{ height: '80%', width: '96%', overflow: 'auto' }}>
        {searchResults.map(({ title }, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                navigate(`/article/${title}/1`)
              }}
            >
              <ListItem button>
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

export default SearchCategory
