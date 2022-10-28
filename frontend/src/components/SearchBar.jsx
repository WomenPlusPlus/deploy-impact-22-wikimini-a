import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar() {
  return (
    <Paper
      component='form'
      elevation={0}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        width: 500,
        background: '#54CABD',
        borderRadius: '33.3382px',
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontFamily: 'Futura',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '27px',
          color: '#FFFFFF',
          boderStyle: 'none',
          paddingLeft: '15px',
        }}
        placeholder='What are you looking for?'
        inputProps={{ 'aria-label': 'What are you looking for?' }}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon
          sx={{
            color: '#FFFFFF',
          }}
        />
      </IconButton>
    </Paper>
  )
}
