import PropTypes from 'prop-types'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { ButtonFolder } from '../../styles/Home'
import { dark, green } from '../../theme/colors'
import { useContext } from 'react'
import ActiveContext from '../../context'

const ContentLayout = ({ inheritChild }) => {
  
  const { active, setActive } = useContext(ActiveContext);

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
          <ButtonFolder onClick={() => setActive('owlets')}>OWLETS</ButtonFolder>
          <ButtonFolder right onClick={() => setActive('owls')}>OWLS</ButtonFolder>
        </Stack>
      </Box>
      <Box
        sx={{
          height: 'calc(100vh - 108px)',
          borderRadius: '2% 2% 0px 0px',
          backgroundColor: `${active === 'owlets' ? green : dark}`,
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
