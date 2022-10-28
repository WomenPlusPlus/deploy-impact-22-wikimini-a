import { Letter, LetterList } from '../styles/Letters'
import { Fade } from '@mui/material'

const abcList = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

const lettersList = abcList.map((letter) => (
  <Fade key={letter} in={true} timeout={3000}>
    <Letter>{letter}</Letter>
  </Fade>
))

const Letters = () => {
  return <LetterList>{lettersList}</LetterList>
}

export default Letters
