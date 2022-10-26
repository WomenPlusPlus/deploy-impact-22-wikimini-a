import styled from 'styled-components';

export const Letter = styled('div')({ 
    color: 'white',
    fontSize: '70px',
    fontWeight: '700',
    fontFamily: 'Futura',
    fontStyle: 'normal',
    textAlign: 'center',
    flex: '25%',
    '&:hover': {
      fontSize: '60px',
      cursor: 'pointer',
      transition: '0.3s'
    },
})

export const LetterList = styled('main')({
  backgroundColor: '#0CB3A1',
  width: '327px',
  display: 'flex',
  flexFlow: 'row wrap'
})
