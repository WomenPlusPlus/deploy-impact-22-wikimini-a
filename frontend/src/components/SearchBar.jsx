import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { lightGreen, grey } from '../theme/colors'
import ActiveContext from '../context'

export default function SearchBar() {
  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState('')
  const { active } = useContext(ActiveContext)

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (!isInputEmpty(searchInput)) {
        navigate(`/search/${searchInput}`)
      }
    }
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  const isInputEmpty = (input) => {
    if (!input || input === '') return true
    return false
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
        background: `${active === 'owlets' ? lightGreen : grey}`,
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
