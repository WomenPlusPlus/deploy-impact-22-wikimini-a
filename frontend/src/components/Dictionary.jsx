import { useNavigate } from 'react-router-dom'
import Letters from './Letters'
import SearchBar from './SearchBar'
import { white } from '../theme/colors'
import { Typography } from '@mui/material'
import backButton from '../assets/backButton.svg'
import { getRoutePath } from '../routes/route-utils'

const Dictionary = () => {
  const navigate = useNavigate()
  const handleSearchLetter = async (letter) => {
    navigate(`/search-letter-dictionary/${letter}`)
  }
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
        onClick={() => navigate(getRoutePath('HOME'))}
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
          marginBottom: '2rem',
          textTransform: 'uppercase',
        }}
        variant='h3'
      >
        Dictionary
      </Typography>
      <SearchBar />
      <Letters handleSearchLetter={handleSearchLetter} />
    </>
  )
}

export default Dictionary
