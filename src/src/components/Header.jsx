import logo from '../assets/logo.svg'
import wikiminiLogo from '../assets/wikiminiLogo.svg'
import { Box, Drawer, IconButton, List, ListItem, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import {
  AuthContainer,
  //   CreateAccount,
  HeaderContainer,
  //   Login,
  Logo,
  MenuButtonContainer,
  SideBar,
  MenuIconSideBar,
  CloseButtonContainer,
  LogoMenu,
  DividerMenu,
} from '../styles/Header'
import { white, green, dark } from '../theme/colors'
import { useNavigate } from 'react-router-dom'
import { getRoutePath } from '../routes/route-utils'
import { menuSideBarItems } from '../utils/menuSideBarItems'
import { useState } from 'react'

const Header = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <HeaderContainer>
      <MenuButtonContainer>
        <IconButton
          onClick={() => setOpen(true)}
          edge='start'
          aria-label='menu'
          sx={{ background: green, color: white }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          anchor='left'
          variant='temporary'
          PaperProps={{
            sx: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              overflowY: 'visible',
            },
          }}
        >
          <SideBar>
            <CloseButtonContainer onClick={() => setOpen(false)}>
              <CloseIcon />
            </CloseButtonContainer>
            <LogoMenu src={wikiminiLogo} />
            <List>
                {menuSideBarItems.map((item) => (
                    <Box key={item.text}>
                        <ListItem sx={{ padding: '0 0 0 0.5em'}}>
                            <MenuIconSideBar onClick={() => navigate(getRoutePath(item.url))}>
                                {item.text}
                            </MenuIconSideBar>
                        </ListItem>
                        <DividerMenu />
                    </Box>
                ))}
            </List>
          </SideBar>
        </Drawer>
      </MenuButtonContainer>
      <Logo src={logo} onClick={() => navigate(getRoutePath('HOME'))} />
      <AuthContainer>
        <Avatar variant="solid"  sx={{ bgcolor: dark }} />
      </AuthContainer>
      {/* <AuthContainer>
                <Login>Log in</Login>
                <CreateAccount>Create an account</CreateAccount>
            </AuthContainer> */}
    </HeaderContainer>
  )
}

export default Header
