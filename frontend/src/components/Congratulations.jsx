import { useNavigate } from 'react-router-dom'
import { Container, Typography, Avatar } from '@mui/material'
import Confetti from 'react-confetti'
import close from '../assets/closeBlack.png'
import congratulations from '../assets/congratulations.png'
import { CloseButtonWrapper } from '../styles/CreateActivity'
import { darkGrey, dark, green } from '../theme/colors'

const Congratulations = () => {
  const navigate = useNavigate()

  return (
    <Container
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Confetti />
      <CloseButtonWrapper>
        <img src={close} alt='close button' onClick={() => navigate('/home')} />
      </CloseButtonWrapper>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '28px',
          lineHeight: '35px',
          color: darkGrey,
          marginBottom: '3.5rem',
          marginTop: '3.5rem',
          textAlign: 'center',
        }}
      >
        Yay! You did it!
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Futura Md BT',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '19.92px',
          color: darkGrey,
          marginBottom: '.5rem',
          marginTop: '3congratulat.5rem',
          textAlign: 'center',
        }}
      >
        A teacher will review your work and will publish it soon. You can find
        your contributions in your
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Futura Md BT',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '19.92px',
          color: green,
          marginBottom: '.5rem',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        contributions page
      </Typography>
      <Avatar
        variant='solid'
        sx={{ bgcolor: dark, cursor: 'pointer', marginBottom: '8rem' }}
      />
      <img src={congratulations} alt='congratulations' />
    </Container>
  )
}

export default Congratulations
