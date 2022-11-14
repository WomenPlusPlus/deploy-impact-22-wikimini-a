import { styled } from '@mui/system'
import { Accordion, Typography } from '@mui/material'
import { white, lighterBlue, green, darkBlue } from '../theme/colors'

export const Container = styled('div')({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Image = styled('img')((props) => ({
  marginTop: '0.25em',
  maxHeight: '160px',
  minWidth: '100px',
  maxWidth: '320px',
  borderRadius: '10px',
  marginLeft: '12px',
  marginRight: '12px',
  marginBottom: '2.5rem',
}))

export const CloseButton = styled('img')((props) => ({
  height: '20px',
  weight: '20px',
  zIndex: '100',
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '15px',
}))

export const RoundedHeader = styled('section')((props) => ({
  position: 'relative',
  background: lighterBlue,
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
    content: `'${props}'`,
    borderTopLeftRadius: '50% 100%',
    borderTopRightRadius: '50% 100%',
    position: 'absolute',
    bottom: '0',
    background: '#fff',
    height: '22vh',
    width: '100%',
  },
}))

export const ReadingLevelText = styled('p')({
  zIndex: '100',
  position: 'absolute',
  top: 0,
  left: 0,
  margin: '15px',
  marginLeft: '1.5rem',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '17px',
  color: darkBlue,
})

export const LevelButtonsContainer = styled('div')({
  minWidth: '65px',
  zIndex: '100',
  position: 'absolute',
  top: 0,
  margin: '10px',
  color: 'orange',
  border: `1px solid ${darkBlue}`,
  borderRadius: '5px',
  padding: '0.3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const CustomAccordion = styled(Accordion)((props) => ({
  background: green,
  marginBottom: '2.5rem',
  width: '85%',
  maxWidth: '320px',
  borderRadius: '33px !important',

  '& #content': {
    background: 'white',
  },

  '&:before': {
    opacity: '0',
  },
}))

export const AccordionTitle = styled(Typography)((props) => ({
  fontFamily: 'Futura Md BT',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  textTransform: 'uppercase',
  color: white,
}))
export const AccordionContent = styled(Typography)((props) => ({
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '147.81%',
  color: '#2F2E41',
}))

export const EditImage = styled('img')((props) => ({
  marginTop: '2rem',
  cursor: 'pointer',
}))

// export const TopContainer = styled('div')({
//   backgroundColor: '#A4E5EE',
//   display: 'flex',
//   justifyContent: 'space-between',
//   paddingLeft: '10px',
//   paddingRight: '10px',
//   paddingTop: '15px',
//   height: '55%',
// })

// export const MainContainer = styled('div')({
//   backgroundColor: white,
//   height: '70%',
//   width: '100%',
//   borderRadius: '50% 50% 0 0',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   zIndex: 1,
//   position: 'relative',
//   bottom: '33%',
//   overflowWrap: 'break-word',
// })

export const BottomContainer = styled('div')({
  backgroundColor: '#0AAAAA',
  width: '100%',
  borderRadius: '30px 30px 0 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '3rem',
  //   zIndex: 2,
  // position: 'fixed',
  //   top: 'calc(100% - 250px)',
  paddingBottom: '35px',
})
