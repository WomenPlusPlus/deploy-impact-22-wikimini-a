import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Button,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import close from '../assets/close.svg'
import edit from '../assets/edit.svg'
import { green, white } from '../theme/colors'
import {
  BottomContainer,
  Container,
  Image,
  CloseButton,
  RoundedHeader,
  ReadingLevelText,
  LevelButtonsContainer,
  CustomAccordion,
  AccordionTitle,
  AccordionContent,
  EditImage,
} from '../styles/ReadArticle'
import SearchResultContainer from './SearchResultContainer'

const ReadArticle = () => {
  const [searchResult, setSearchResult] = useState([])
  const [relatedResult, setRelatedResult] = useState([])
  const [expandFirst, setExpandFirst] = useState(true)

  const { id, level } = useParams()
  const navigate = useNavigate()

  const fetcher = async (path) => {
    const response = await fetch('https://en.wikipedia.org/w/api.php' + path)
    return await response.json()
  }

  useEffect(() => {
    const getData = async () => {
      const introEndpoint =
        level === '1'
          ? `?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&exsentences=2&titles=${id}`
          : `?origin=*&format=json&action=query&prop=pageimages|extracts&exintro&explaintext&titles=${id}`
      const contentEndpoint =
        level === '1'
          ? `?origin=*&format=json&action=query&prop=pageimages|extracts&exintro&explaintext&titles=${id}`
          : `?origin=*&format=json&action=query&prop=pageimages|extracts&explaintext&titles=${id}`

      const relatedEndpoint = `?origin=*&action=query&list=search&srsearch=${id}&format=json`

      try {
        const [introData, contentData, relatedData] = await Promise.all([
          fetcher(introEndpoint),
          fetcher(contentEndpoint),
          fetcher(relatedEndpoint),
        ])

        const intro = Object.values(introData.query.pages).map(
          ({ title, pageid, thumbnail, extract }) => ({
            extract,
          })
        )
        const finalData = Object.values(contentData.query.pages).map(
          ({ title, pageid, thumbnail, extract }) => ({
            pageid,
            title,
            extract,
            image: thumbnail ? thumbnail.source : null,
            intro: intro[0].extract,
          })
        )
        setSearchResult(finalData)

        if (relatedData.query.search.length) {
          setRelatedResult(relatedData.query.search[relatedData.length - 1])
          if (relatedData.query.search.length >= 2) {
            setRelatedResult([
              {
                ...relatedData.query.search[
                  relatedData.query.search.length - 2
                ],
                category: 'article: ',
              },
              {
                ...relatedData.query.search[
                  relatedData.query.search.length - 1
                ],
                category: 'article: ',
              },
            ])
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    }

    getData()
  }, [id, level])

  return (
    <div style={{ background: white }}>
      {searchResult.map(({ pageid, title, image, intro, extract }) => {
        return (
          <div key={pageid}>
            <RoundedHeader title={title}>
              <ReadingLevelText>Reading level:</ReadingLevelText>
              <LevelButtonsContainer>
                <Button
                  sx={{
                    minWidth: '30px',
                    lineHeight: '2px',
                    padding: '8px',
                    marginRight: '4px',
                    background: level === '1' ? green : 'none',
                    '&:hover': { background: green },
                  }}
                  variant={level === '1' ? 'contained' : 'text'}
                  onClick={() => navigate(`/article/${id}/${1}`)}
                >
                  1
                </Button>
                <Button
                  sx={{
                    minWidth: '30px',
                    lineHeight: '2px',
                    padding: '8px',
                    marginLeft: '4px',
                    background: level === '2' ? green : 'none',
                    '&:hover': { background: green },
                  }}
                  variant={level === '2' ? 'contained' : 'text'}
                  onClick={() => navigate(`/article/${id}/${2}`)}
                >
                  2
                </Button>
              </LevelButtonsContainer>
              <CloseButton
                src={close}
                onClick={() => {
                  navigate(-1)
                }}
              />
            </RoundedHeader>
            <Container>
              <Image src={image} />
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
                        color: green,
                      }}
                    />
                  }
                >
                  <AccordionTitle>Introduction</AccordionTitle>
                </AccordionSummary>
                <AccordionDetails aria-controls='content' id='content'>
                  <AccordionContent>{intro}</AccordionContent>
                </AccordionDetails>
              </CustomAccordion>
              <CustomAccordion>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        background: white,
                        borderRadius: '50%',
                        color: green,
                      }}
                    />
                  }
                >
                  <AccordionTitle>Content</AccordionTitle>
                </AccordionSummary>
                <AccordionDetails aria-controls='content' id='content'>
                  <AccordionContent>{extract}</AccordionContent>
                </AccordionDetails>
              </CustomAccordion>
              <EditImage src={edit} />
              <BottomContainer>
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '20px',
                    textAlign: 'center',
                    color: white,
                    marginTop: '39px',
                  }}
                >
                  Related Articles & Activities:
                </Typography>
                <div
                  onClick={() => {
                    navigate(`/article/${relatedResult[0].title}/1`)
                  }}
                >
                  <SearchResultContainer item={relatedResult[0]} />
                </div>
                <div
                  onClick={() => {
                    navigate(`/article/${relatedResult[1].title}/1`)
                  }}
                >
                  <SearchResultContainer item={relatedResult[1]} />
                </div>
              </BottomContainer>
            </Container>
          </div>
        )
      })}
    </div>
  )
}

export default ReadArticle
