import { Button, Stack, MenuItem, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/system'
import { darkYellow, red, white, yellow, green } from '../theme/colors';

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

export const LogoMenu = styled('img')({
    maxWidth: '170px',
    width: '100%',
    height: 'auto',
    marginTop: '10%',
    marginLeft: '25%',
    marginBottom: '10%',
    display: 'flex',
    flexDirection: 'column'
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

export const SideBar = styled('div')({
    borderTopRightRadius: '10%',
    borderBottomRightRadius: '10%',
    backgroundColor: yellow,
    width: '150%',
    height: 'inherit'
})

export const MenuIconSideBar = styled(MenuItem)({
    color: white,
    fontWeight: '750',
    font: 'Futura',
    marginLeft: '5%',
    fontSize: 'small'
})

export const CloseButtonContainer = styled(IconButton)({
    marginTop: '5%',
    marginLeft: '5%',
    background: green, 
    color: white
})

export const DividerMenu = styled(Divider)({
    marginLeft: '5%', 
    marginRight: '5%', 
    borderBottomWidth:'2px', 
    background: white,
    borderColor: white
})