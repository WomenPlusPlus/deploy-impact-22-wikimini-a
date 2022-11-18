import styled from 'styled-components'

export const Letter = styled('div')({
  color: 'white',
  fontSize: '40px',
  fontWeight: '700',
  fontFamily: 'Futura',
  fontStyle: 'normal',
  textAlign: 'center',
  flex: '15%',
  margin: '0px',
  '&:hover': {
    fontSize: '30px',
    cursor: 'pointer',
    transition: '0.3s',
  },
})

export const LetterList = styled('main')({
  display: 'flex',
  flexFlow: 'row wrap',
  marginTop: '2.5rem',
  marginBottom: '1rem',
})
