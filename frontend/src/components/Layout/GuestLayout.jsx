import Header from '../Header'
import Container from '@mui/material/Container'
import ContentLayout from './ContentLayout'

import PropTypes from 'prop-types'

const GuestLayout = ({ children }) => {
  return (
    <Container
      disableGutters={true}
      sx={{
        height: 'calc(100vh - 108px)',
        minWidth: '100%',
      }}
    >
      <Header />
      <ContentLayout inheritChild={children} />
    </Container>
  )
}

GuestLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GuestLayout
