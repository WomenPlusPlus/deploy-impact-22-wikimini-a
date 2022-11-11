// import { Button} from '@mui/material'
import { styled } from '@mui/system'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import { darkYellow, red, white, yellow, green } from '../theme/colors'

export const Container = styled('div')({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Image = styled('img')((props) => ({
  marginTop: '0.25em',
  maxHeight: '160px',
  width: '75%',
  borderRadius: '10px',
  marginLeft: '12px',
  marginRight: '12px',
  marginBottom: '2.5rem',
}))

export const RoundedHeader = styled('section')({
  position: 'relative',
  background: '#2c3e50',
  height: '30vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:after': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '-0.25em',
    content: '"Cacao"',
    borderTopLeftRadius: '50% 100%',
    borderTopRightRadius: '50% 100%',
    position: 'absolute',
    bottom: '0',
    background: '#fff',
    height: '22vh',
    width: '100%',
  },
})

export const CustomAccordion = styled(Accordion)((props) => ({
  background: '#0AAAAA',
  marginBottom: '2.5rem',
  width: '75%',
  borderRadius: '33px !important',

  '& #content': {
    background: 'white',
  },
}))

const ContentPage = () => {
  return (
    <div style={{ background: 'white' }}>
      <RoundedHeader>
        <p style={{ color: 'orange', zIndex: '100', position: 'absolute' }}>
          Reading level
        </p>
      </RoundedHeader>
      <Container>
        <Image src={require('../assets/cacao.png')} />
        <CustomAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails aria-controls='content' id='content'>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails aria-controls='content' id='content'>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </CustomAccordion>
      </Container>
    </div>
  )
}

export default ContentPage
