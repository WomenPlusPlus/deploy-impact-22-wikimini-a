import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import close from '../assets/close.svg'
import edit from '../assets/editBlue.png'
import { white } from '../theme/colors'
import {
  Container,
  Image,
  CloseButton,
  RoundedHeader,
  CustomAccordion,
  AccordionTitle,
  AccordionContent,
  WordType,
  PaperWrapperType,
  EditImage,
} from '../styles/Word'

const Word = () => {
  const [searchResult] = useState([
    {
      pageid: 20349,
      title: 'Intrigue',
      extract: 'arouse the curiosity or interest of; fascinate',
      image: require('../assets/intrigued.jpg'),
    },
  ])
  const [expandFirst, setExpandFirst] = useState(true)

  const { id, level } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    // const getData = async () => {
    //   const introEndpoint =
    //     level === '1'
    //       ? `?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&exsentences=2&titles=${id}`
    //       : `?origin=*&format=json&action=query&prop=pageimages|extracts&exintro&explaintext&titles=${id}`
    //   const contentEndpoint =
    //     level === '1'
    //       ? `?origin=*&format=json&action=query&prop=pageimages|extracts&exintro&explaintext&titles=${id}`
    //       : `?origin=*&format=json&action=query&prop=pageimages|extracts&explaintext&titles=${id}`
    //   try {
    //     const [introData, contentData] = await Promise.all([
    //       fetcher(introEndpoint),
    //       fetcher(contentEndpoint),
    //     ])
    //     const intro = Object.values(introData.query.pages).map(
    //       ({ title, pageid, thumbnail, extract }) => ({
    //         extract,
    //       })
    //     )
    //     const finalData = Object.values(contentData.query.pages).map(
    //       ({ title, pageid, thumbnail, extract }) => ({
    //         pageid,
    //         title,
    //         extract,
    //         image: thumbnail ? thumbnail.source : null,
    //         intro: intro[0].extract,
    //       })
    //     )
    //     setSearchResult(finalData)
    //   } catch (error) {
    //     throw new Error(error)
    //   }
    // }
    // getData()
  }, [id, level])

  return (
    <div style={{ background: white }}>
      {searchResult.map(({ pageid, title, image, extract }) => {
        return (
          <div key={pageid}>
            <RoundedHeader title={title}>
              <CloseButton
                src={close}
                onClick={() => {
                  navigate('/home')
                }}
              />
            </RoundedHeader>
            <Container>
              <Image src={image} />
              <PaperWrapperType>
                <WordType>Verb</WordType>
              </PaperWrapperType>
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
                        color: '#2F2E41',
                      }}
                    />
                  }
                >
                  <AccordionTitle>Description</AccordionTitle>
                </AccordionSummary>
                <AccordionDetails aria-controls='content' id='content'>
                  <AccordionContent>{extract}</AccordionContent>
                </AccordionDetails>
              </CustomAccordion>
              <EditImage src={edit} alt='edit button' />
            </Container>
          </div>
        )
      })}
    </div>
  )
}

export default Word
