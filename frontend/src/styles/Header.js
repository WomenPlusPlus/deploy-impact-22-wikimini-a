import { Button, Stack } from '@mui/material';
import { styled } from '@mui/system'
import { darkYellow, red, white, yellow } from '../theme/colors';

export const HeaderContainer = styled(Stack)({
    background: white, 
    paddingTop: '40px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
})

export const MenuButtonContainer = styled('div')({
    flex: '1',
})

export const Logo = styled('img')({
    width: '195px',
    height: '68px',
    flex: '1',
    '&:hover': {
        cursor: 'pointer'
    }
})

export const AuthContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',  
    justifyContent: 'flex-end',  
    flex: '1',
})

export const Login = styled('button')({
    border: `1px solid ${red}`,
    borderRadius: '30px',
    color: red,
    backgroundColor: white,
    fontWeight: '500',
    fontSize: '16px',
    marginRight: '20px',
    paddingLeft: '40px',
    paddingRight: '40px',
    '&:hover': {
        transition: '.3s',
        cursor: 'pointer',
        opacity: '.7'
      },
})

export const CreateAccount = styled(Button)({
    borderRadius: '30px',
    color: white,
    backgroundColor: yellow,
    fontWeight: '500',
    fontSize: '16px',
    paddingLeft: '20px',
    paddingRight: '20px',
    '&:hover': {
        backgroundColor: darkYellow,
        transition: '.3s',
        cursor: 'pointer',
      },
})