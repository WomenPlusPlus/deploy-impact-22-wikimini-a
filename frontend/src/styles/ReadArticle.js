import { styled } from '@mui/system'
import { white } from '../theme/colors'

export const TopContainer = styled('div')({
    backgroundColor: '#A4E5EE',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '15px',
    height: '55%',
})

export const MainContainer = styled('div')({
    backgroundColor: white,
    height: '70%',
    width: '100%',
    borderRadius: '50% 50% 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1,
    position: 'relative',
    bottom: '33%',
    overflowWrap: 'break-word'
})

export const BottomContainer = styled('div')({
    backgroundColor: '#0AAAAA',
    width: '100%',
    borderRadius: '30px 30px 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2,
    position: 'fixed',
    top: 'calc(100% - 250px)',
    paddingBottom: '35px'
})