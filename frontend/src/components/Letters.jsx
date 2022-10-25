import { Letter, LetterList } from '../styles/Letters';

const abcList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z'];

const lettersList = abcList.map((letter) =>
    <Letter key={letter}>{letter}</Letter>
  );

const Letters = () => {
  
    return (
      <LetterList>
        {lettersList}
      </LetterList>
    );
  };

export default Letters;