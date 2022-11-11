/* eslint-disable react/jsx-key */
import { Accordion, AccordionDetails, AccordionSummary, Drawer, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import close from '../assets/close.svg'
import { BottomContainer, MainContainer, TopContainer } from "../styles/ReadArticle";
import { dark, white } from "../theme/colors";
import { resultArticles } from "../utils/mockups";
import edit from "../assets/edit.svg";
import SearchResultContainer from "./SearchResultContainer";
import arrowDown from "../assets/arrowDown.svg"
import { useNavigate } from "react-router-dom";

const ReadArticle = () => {

    // THIS LINE HAS TO BE REMOVED WHEN WE INTERGRATE THE API CALL
    const id = 1;
    // const { id } = useParams();
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [article, setArticle] = useState({});
    // const [firstRelatedOpen, setFirstRelatedOpen] = useState(false);
    // const [secondRelatedOpen, setSecondRelatedOpen] = useState(false);

    useEffect(() => {
        setArticle(resultArticles.find(item => item.id === id))
        setOpenDrawer(true);
    }, [])

    return(
        <Drawer 
        anchor="bottom"
        open={openDrawer}
        PaperProps={{
            sx: {
                width: '100%',
                height: '100%',
            }
        }}
        >
            <TopContainer>
                <Typography sx={{ fontWeight: '700', fontSize: '14px', color: dark, margin: 0 }}>Reading level:</Typography>
                <img style={{ height: '20px', weight: '20px' }} src={close} onClick={() => {
                    setOpenDrawer(false)
                    navigate('/articles')
                }} />
            </TopContainer>
            <MainContainer>
                <Typography
                sx={{
                    fontWeight: '700',
                    fontSize: '30px',
                    textAlign: 'center',
                    color: '#2F2E41',
                    marginTop: '25px',
                    marginBottom: '150px'
                }}>
                    {article.title}
                </Typography>
                <div>
                    {
                        article.content && Object.keys(article.content).map((key) => (
                            <Accordion
                            key={key}
                            sx={{
                                boxShadow: 'none'
                            }}
                            >
                                <AccordionSummary
                                expandIcon={<img style={{ height: '28px' }} src={arrowDown} />}
                                id={article.id}
                                sx={{
                                    backgroundColor: '#0AAAAA',
                                    borderRadius: '30px',
                                    color: white,
                                    textTransform: 'uppercase',
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    marginBottom: '25px'
                                }}
                                >
                                <Typography>{key}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{
                                    fontWeight: '500',
                                    fontSize: '24px',
                                    color: '#2F2E41',
                                }}>
                                    {article.content[key]}
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </div>
                <img src={edit} />
            </MainContainer>
            <BottomContainer>
                <Typography
                sx={{
                    fontWeight: '700',
                    fontSize: '20px',
                    textAlign: 'center',
                    color: white,
                    marginTop: '39px'
                }}>
                    Related Articles & Activities:
                </Typography>
                <div onClick={() => {
                    navigate(`/article/${resultArticles[0].id}`)
                }}>
                    <SearchResultContainer item={resultArticles[0]} />
                </div>
                <div onClick={() => {
                    navigate(`/article/${resultArticles[1].id}`)
                }}>
                    <SearchResultContainer item={resultArticles[1
                    ]} />
                </div>
            </BottomContainer>
        </Drawer>
    );
}

export default ReadArticle;