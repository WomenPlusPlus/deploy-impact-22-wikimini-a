import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import SearchBar from './SearchBar'
import backButton from '../assets/backButton.svg'
import { white, yellow } from '../theme/colors'

const Writer = () => {
  const navigate = useNavigate()
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
        onClick={() => navigate(-1)}
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
          marginBottom: '3.5rem',
        }}
        variant='h3'
      >
        Be a writter!
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '30.527px',
          lineHeight: '37px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: yellow,
          marginBottom: '2rem',
          transform: 'rotate(-4.22deg)',
        }}
        variant='h3'
      >
        Let&#39;s get started!
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: white,
          marginBottom: '2rem',
        }}
        variant='h3'
      >
        First search if the topic of your article already exists.
      </Typography>

      <SearchBar />
    </>
  )
}

export default Writer
