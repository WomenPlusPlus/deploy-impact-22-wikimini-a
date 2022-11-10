import PropTypes from 'prop-types'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { ButtonFolder } from '../../styles/Home'
import { green } from '../../theme/colors'

const ContentLayout = ({ inheritChild }) => {
  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      <Box
        sx={{
          paddingTop: '40px',
        }}
      >
        <Stack
          direction='row'
          justifyContent='center'
          width={'100%'}
          spacing={2}
        >
          <ButtonFolder>OWLETS</ButtonFolder>
          <ButtonFolder right>OWLS</ButtonFolder>
        </Stack>
      </Box>
      <Box
        sx={{
          height: 'calc(100% - 88px)',
          borderRadius: '2% 2% 0px 0px',
          backgroundColor: green,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2.5rem 1.5rem 1.5rem 1.5rem',
          overflow: 'auto',
        }}
      >
        {inheritChild}
      </Box>
    </Box>
  )
}

ContentLayout.propTypes = {
  inheritChild: PropTypes.node.isRequired,
}

export default ContentLayout
