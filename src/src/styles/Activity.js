import { styled } from '@mui/system'
import { Accordion, Typography } from '@mui/material'
import { white, lighterRed, red } from '../theme/colors'

export const Container = styled('div')({
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Image = styled('img')({
  marginTop: '0.25em',
  maxHeight: '160px',
  minWidth: '100px',
  maxWidth: '320px',
  borderRadius: '10px',
  marginLeft: '12px',
  marginRight: '12px',
  marginBottom: '2.5rem',
})

export const CloseButton = styled('img')({
  height: '20px',
  weight: '20px',
  zIndex: '100',
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '15px',
})

export const RoundedHeader = styled('section')((props) => ({
  position: 'relative',
  background: lighterRed,
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
    content: `'${props.title}'`,
    borderTopLeftRadius: '50% 100%',
    borderTopRightRadius: '50% 100%',
    position: 'absolute',
    bottom: '0',
    background: '#fff',
    height: '22vh',
    width: '100%',
    textAlign: 'center',
  },
}))

export const CustomAccordion = styled(Accordion)({
  backgroundColor: red,
  marginBottom: '4.5rem',
  marginTop: '2.5rem',
  width: '85%',
  maxWidth: '320px',
  borderRadius: '33px !important',
  whiteSpace: 'pre-wrap',
  boxShadow: 'none',
  '& #content': {
    background: 'white',
  },

  '&:before': {
    opacity: '0',
  },
})

export const AccordionTitle = styled(Typography)({
  fontFamily: 'Futura Md BT',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  textTransform: 'uppercase',
  color: white,
})

export const AccordionContent = styled(Typography)({
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '147.81%',
  color: '#2F2E41',
})

export const EditImage = styled('img')({
  marginTop: '3rem',
  cursor: 'pointer',
})
