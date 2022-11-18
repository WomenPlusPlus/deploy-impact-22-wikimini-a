import { Paper } from "@mui/material"
import { styled } from "@mui/system"

export const ImageInBoxSearch = styled('img')((props) => ({
    height: '41px',
}))
  
export const TextInBoxSearch = styled('p')((props) => ({
    fontFamily: 'Futura',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    textAlign: 'center',
    color: props.textcolor,
    margin: '0px',
}))
  
export const PaperBoxSearch = styled(Paper)((props) => ({
    height: 91,
    width: 88,
    backgroundColor: props.backgroundcolor,
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '1rem',
    '&:hover, &:focus': {
      boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
      transition: '.3s',
      cursor: 'pointer',
    },
}))