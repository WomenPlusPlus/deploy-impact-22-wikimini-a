import { styled } from '@mui/system'
import { white, yellow, darkYellow, green } from '../theme/colors'
import { Button } from  '@mui/material'

export const LanguageRoundedHeader = styled('div')({
    position: 'relative',
    background: '#fff',
    height: '30vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
    '&:after': {
      fontWeight: 700,
      fontSize: '29.9477px',
      lineHeight: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '-0.25em',
      content: `''`,
      borderTopLeftRadius: '50% 100%',
      borderTopRightRadius: '50% 100%',
      position: 'absolute',
      bottom: '0',
      background: green,
      height: '22vh',
      width: '100%',
    },
  })

  export const LanguageButton = styled(Button)({
    borderRadius: '1.8em',
    color: white,
    backgroundColor: yellow,
    font: 'Futura',
    fontWeight: 'bolder',
    fontSize: '1.5em',
    textTransform: 'capitalize',
    height: '7%',
    width: '40%',
    position: 'absolute',
    '&:hover': {
        backgroundColor: darkYellow,
        transition: '.3s',
        cursor: 'pointer',
      },
})

export const ImageLogo = styled('img')((props) => ({
    position:'absolute',   
    marginTop: '-6em', 
    height: '32%',
    width: '63%',  
    marginLeft: '20%'
  }))

  export const Image = styled('img')((props) => ({
    position:'absolute',
    zIndex: 2
  }))