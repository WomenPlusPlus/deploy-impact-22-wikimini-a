import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import close from '../assets/closeRed.png'
import edit from '../assets/editRed.png'
import image from '../assets/craftsOwls.png'
import { lightRed, white } from '../theme/colors'
import {
  Container,
  Image,
  CloseButton,
  RoundedHeader,
  CustomAccordion,
  AccordionTitle,
  AccordionContent,
  EditImage,
} from '../styles/Activity'

const Activity = () => {
    const navigate = useNavigate()
    const [expandFirst, setExpandFirst] = useState(true)
    const item = {
         title: "title activity",
         introduction: "intro",
         ingredients: "the ingredients",
         process: "the process"   
    }

  useEffect(() => {   
        
  }, [])

  return (
    <div style={{ background: white }}>
          <div>
            <RoundedHeader title={item.title}>
              <CloseButton
                src={close}
                onClick={() => {
                  navigate('/home')
                }}
              />
            </RoundedHeader>
            <Container>
              <Image src= {image} />
              <CustomAccordion
                expanded={expandFirst}
                onChange={() => setExpandFirst(!expandFirst)}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        background: white,
                        borderRadius: '50%',
                        color: lightRed,
                      }}
                    />
                  }
                >
                  <AccordionTitle>Introduction</AccordionTitle>
                </AccordionSummary>
                <AccordionDetails aria-controls='content' id='content'>
                  <AccordionContent>{item.intro}</AccordionContent>
                </AccordionDetails>
              </CustomAccordion>
              <CustomAccordion>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        background: white,
                        borderRadius: '50%',
                        color: lightRed,
                      }}
                    />
                  }
                >
                  <AccordionTitle>Ingredients</AccordionTitle>
                </AccordionSummary>
                <AccordionDetails aria-controls='content' id='content'>
                  <AccordionContent>{item.ingredients}</AccordionContent>
                </AccordionDetails>
              </CustomAccordion>
              <CustomAccordion>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        background: white,
                        borderRadius: '50%',
                        color: lightRed,
                      }}
                    />
                  }
                >
                  <AccordionTitle>Process</AccordionTitle>
                </AccordionSummary>
                <AccordionDetails aria-controls='content' id='content'>
                  <AccordionContent>{item.process}</AccordionContent>
                </AccordionDetails>
              </CustomAccordion>
              <EditImage src={edit} />
            </Container>
          </div>
    </div>
  )
}

export default Activity
