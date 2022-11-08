import { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { lightGreen } from '../theme/colors'

export default function SearchBar({ searchValue = '' }) {
  const [searchInput, setSearchInput] = useState(searchValue)
  const [, setSearchResult] = useState({})

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      getData()
    }
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  const endpoint = 'https://en.wikipedia.org/w/api.php?'
  // const endpoint = 'http://192.168.64.2/api.php'

  const params = {
    origin: '*',
    format: 'json',
    action: 'query',
    prop: 'extracts',
    exchars: 250,
    exintro: true,
    explaintext: true,
    generator: 'search',
    gsrlimit: 5,
  }

  const isInputEmpty = (input) => {
    if (!input || input === '') return true
    return false
  }

  const getData = async () => {
    if (isInputEmpty(searchInput)) return

    params.gsrsearch = searchInput

    try {
      const { data } = await axios.get(endpoint, { params })
      const results = Object.values(data.query.pages).map((page) => ({
        pageId: page.pageid,
        title: page.title,
        intro: page.extract,
      }))
      setSearchResult(results)
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <Paper
      component='form'
      elevation={0}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        width: '100%',
        maxWidth: '600px',
        background: lightGreen,
        borderRadius: '33.3382px',
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontFamily: 'Futura',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '27px',
          color: '#FFFFFF',
          boderStyle: 'none',
          paddingLeft: '5px',
        }}
        placeholder='What are you looking for?'
        inputProps={{ 'aria-label': 'What are you looking for?' }}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon
          sx={{
            color: '#FFFFFF',
          }}
        />
      </IconButton>
    </Paper>
  )
}

SearchBar.propTypes = {
  searchValue: PropTypes.string,
}
