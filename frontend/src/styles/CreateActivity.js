import { Typography, Button, Paper, styled } from '@mui/material'
import { red, lighterRed, darkGrey, white } from '../theme/colors'
import ContentEditable from 'react-contenteditable'

export const CloseButtonWrapper = styled('section')((props) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
  marginBottom: '2rem',
  img: {
    height: '20px',
    weight: '20px',
    marginTop: '10px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))
export const Title = styled(Typography)((props) => ({
  fontSize: '29.9477px',
  lineHeight: '36px',
  fontWeight: 700,
  textAlign: 'center',
  color: red,
  marginBottom: '3rem',
}))

export const PaperWrapperName = styled(Paper)((props) => ({
  width: '100%',
  minHeight: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: lighterRed,
  marginBottom: '3rem',
  boxShadow: 'none',
  borderRadius: '15px',
  //   p: {
  //     outline: 'none',
  //   },
}))

export const PaperWrapperDescription = styled(Paper)((props) => ({
  width: '100%',
  minHeight: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '33px',
  background: red,
  marginBottom: '1rem',
  marginTop: '3rem',
}))

export const CustomTextArea = styled('textarea')((props) => ({
  width: '100%',
  minHeight: '180px',
  borderStyle: 'none',
  borderRadius: '10px',
  padding: '0.5rem',
  background: lighterRed,
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '35px',
  color: darkGrey,
  opacity: 0.5,
  '&:focus': {
    outline: `1px solid ${red}`,
  },
}))

export const CustomContentEditable = styled(ContentEditable)((props) => ({
  fontSize: '29.9477px',
  lineHeight: '36px',
  fontWeight: 700,
  textAlign: 'center',
  color: darkGrey,
  opacity: 0.5,
  textTransform: 'capitalize',
  outline: 'none',
}))

export const DescriptionText = styled(Typography)((props) => ({
  fontSize: '16px',
  lineHeight: '19px',
  fontWeight: 400,
  textAlign: 'center',
  color: white,
  fontFamily: 'Futura Md BT',
  textTransform: 'uppercase',
}))

export const ButtonFile = styled(Button)((props) => ({
  width: '100%',
  minHeight: '50px',
  color: red,
  borderRadius: '33px',
  border: '1px solid red',
  fontFamily: 'Futura Md BT',
  fontWeight: 400,
  fontSize: '15px',
  lineHeight: '18px',
  textTransform: 'capitalize',

  '&:hover': {
    background: lighterRed,
    border: '1px solid red',
    fontWeight: 600,
  },
}))

export const SubmitBottonWrapper = styled('section')((props) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}))

export const MaxLengthWrapper = styled('div')((props) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '4rem',
  p: {
    margin: '0px',
    fontFamily: 'Futura Md BT',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '16px',
    color: red,
  },
}))

export const ButtonSubmit = styled(Button)((props) => ({
  minWidth: '120px',
  color: white,
  background: red,

  borderRadius: '33px',
  border: '1px solid red',
  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '27px',
  textTransform: 'capitalize',

  '&:hover': {
    background: lighterRed,
    border: '1px solid red',
    fontWeight: 600,
  },
}))
