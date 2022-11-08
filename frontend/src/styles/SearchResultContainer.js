import { styled } from '@mui/system'
import { lightGrey } from '../theme/colors'

export const Container = styled('div')({
    backgroundColor: lightGrey,
    width: '90%',
    height: '57px',
    marginTop:'16px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
})

export const Image = styled('img')((props) => ({
    height: '80%',
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: props.borderColor,
    borderRadius: '10px',
    marginLeft: '12px',
    marginRight: '12px',
}))

