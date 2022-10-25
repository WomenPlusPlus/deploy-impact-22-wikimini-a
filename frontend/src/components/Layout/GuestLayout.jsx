import Header from "../Header";
import Container from '@mui/material/Container';

import PropTypes from 'prop-types';

const GuestLayout = ({ children }) =>{
    return(
        <Container
        disableGutters={true}
        sx={{
        height: 'calc(100vh - 108px)',
        minWidth: '100%',
        }}
        >
            <Header />
            {children}
        </Container>
    );
}

GuestLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GuestLayout;