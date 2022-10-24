import { styled } from '@mui/system'
import { Paper } from '@mui/material'

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
  color: '#FFFFFF',
  background: props.right ? '#2F2E41' : '#0CB3A1',
  marginRight: props.right ? '40px !important' : '0px',
  '&:hover': {
    boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
    transition: '.3s',
    cursor: 'pointer',
  },
}))

export const ImageInBox = styled('img')((props) => ({
  width: '120px',
  height: props.id === 'article' ? '100px' : '100px',
  marginTop: props.id === 'article' ? '0px' : '15px',
  marginBottom: props.id === 'article' ? '-30px' : '-40px',
}))

export const TextInBox = styled('p')({
  fontFamily: 'Futura',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '18px',
  textAlign: 'center',
  lineHeight: '24px',
  color: '#1362E1',
  margin: '0px',
})

export const PaperBox = styled(Paper)({
  height: 140,
  width: 138,
  backgroundColor: '#FDC453',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
    height: 150,
    width: 148,
    transition: '.3s',
    cursor: 'pointer',
  },
})
