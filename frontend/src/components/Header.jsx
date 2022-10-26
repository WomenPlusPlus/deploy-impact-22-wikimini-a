import logo from '../assets/logo.svg';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContainer, CreateAccount, HeaderContainer, Login, Logo, MenuButtonContainer } from '../styles/Header';
import { white, green } from '../theme/colors';
import { useNavigate } from 'react-router-dom';
import { getRoutePath } from '../routes/route-utils';

const Header = () => {

    const navigate = useNavigate();

    return(
        <HeaderContainer>
            <MenuButtonContainer>
                <IconButton edge="start" aria-label="menu" sx={{ background: green, color: white }}>
                    <MenuIcon/>
                </IconButton>
            </MenuButtonContainer>
            <Logo src={logo} onClick={() => navigate(getRoutePath("HOME"))} />
            <AuthContainer>
                <Login>Log in</Login>
                <CreateAccount>Create an account</CreateAccount>
            </AuthContainer>
        </HeaderContainer>
    );
}

export default Header;