import { Button, Stack, MenuItem, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/system'
import { darkYellow, red, white, yellow, green } from '../theme/colors';

export const HeaderContainer = styled(Stack)({
    background: white, 
    paddingTop: '1%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '4%'
})

export const MenuButtonContainer = styled('div')({
    flex: '1',
})

export const LogoMenu = styled('img')({
    maxWidth: '10.625em',
    width: '100%',
    height: 'auto',
    marginTop: '10%',
    marginLeft: '15%',
    marginBottom: '10%',
    display: 'flex',
    flexDirection: 'column'
})

export const Logo = styled('img')({
    width: '10em',
    height: '3.5em',
    marginTop: '1%',
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
    borderRadius: '1.8em',
    color: red,
    backgroundColor: white,
    fontWeight: 'medium',
    fontSize: '1em',
    marginRight: '5%',
    paddingLeft: '10%',
    paddingRight: '15%',
    '&:hover': {
        transition: '.3s',
        cursor: 'pointer',
        opacity: '.7'
      },
})

export const CreateAccount = styled(Button)({
    borderRadius: '1.8em',
    color: white,
    backgroundColor: yellow,
    fontWeight: 'medium',
    fontSize: '0.8em',
    paddingLeft: '5%',
    paddingRight: '5%',
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
    fontWeight: 'bold',
    font: 'Futura',
    marginLeft: '5%',
    fontSize: '0.8em'
})

export const CloseButtonContainer = styled(IconButton)({
    marginTop: '5%',
    marginLeft: '5%',
    background: green, 
    color: white
})

export const DividerMenu = styled(Divider)({
    marginLeft: '10%', 
    marginRight: '8%', 
    borderBottomWidth:'0.1em', 
    background: white,
    borderColor: white
})