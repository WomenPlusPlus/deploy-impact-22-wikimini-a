import { styled } from '@mui/system'
import { Paper } from '@mui/material'
import { white, green, dark } from '../theme/colors'

export const ButtonFolder = styled('button')((props) => ({
  width: '150px',
  height: '48px',
  borderRadius: '12px 12px 0px 0px',
  paddingTop: '8px',
  borderStyle: 'none',
  fontFamily: 'Futura',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '22px',
  lineHeight: '32px',
  textAlign: 'center',
  color: white,
  background: props.right ? dark : green,
  '&:hover': {
    boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
    transition: '.3s',
    cursor: 'pointer',
  },
}))

export const ImageInBox = styled('img')((props) => ({
  width: '120px',
  height: props.id === 'article' ? '100px' : '100px',
  marginTop: props.id === 'article' ? '15px' : '15px',
  marginBottom: props.id === 'article' ? '-30px' : '-40px',
}))

export const TextInBox = styled('p')((props) => ({
  fontFamily: 'Futura',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '18px',
  textAlign: 'center',
  lineHeight: '24px',
  color: props.textcolor,
  margin: '0px',
}))

export const PaperBox = styled(Paper)((props) => ({
  height: 140,
  width: 138,
  backgroundColor: props.backgroundcolor,
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1rem',
  '&:hover': {
    boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
    height: 150,
    width: 148,
    transition: '.3s',
    cursor: 'pointer',
  },
}))

export const OwlsImgBox = styled('img')((props) => ({
  height: 140,
  width: 138,
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1rem',
  '&:hover': {
    boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
    height: 150,
    width: 148,
    transition: '.3s',
    cursor: 'pointer',
  },
}))
