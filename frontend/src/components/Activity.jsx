import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import close from '../assets/closeRed.png'
import edit from '../assets/editRed.png'
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
  const [activity, setActivity] = useState({})

  useEffect(() => {
    if (localStorage.getItem('createdActivity')) {
      const activityStored = JSON.parse(localStorage.getItem('createdActivity'))
      const addBr = activityStored.extract.replace(/-/g, `    - `)
      activityStored.extract = addBr

      setActivity(activityStored)
    }
  }, [])

  return (
    <div style={{ background: white }}>
      <div>
        <RoundedHeader title={activity.title}>
          <CloseButton
            src={close}
            onClick={() => {
              navigate('/home')
            }}
          />
        </RoundedHeader>
        <Container>
          <Image src={activity.image} />
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
              <AccordionTitle>Description</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails aria-controls='content' id='content'>
              <AccordionContent>{activity.extract}</AccordionContent>
            </AccordionDetails>
          </CustomAccordion>
          <EditImage src={edit} />
        </Container>
      </div>
    </div>
  )
}

export default Activity
