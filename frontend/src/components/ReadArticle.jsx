/* eslint-disable react/jsx-key */
import { Accordion, AccordionDetails, AccordionSummary, Drawer, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import close from '../assets/close.svg'
import { BottomContainer, MainContainer, TopContainer } from "../styles/ReadArticle";
import { dark, white } from "../theme/colors";
import { resultArticles } from "../utils/mockups";
import arrowDown from "../assets/arrowDown.svg";
import edit from "../assets/edit.svg";
import SearchResultContainer from "./SearchResultContainer";

const ReadArticle = ({ open, setOpenDrawer, articleId }) => {

    // THIS LINE HAS TO BE REMOVED WHEN WE INTERGRATE THE API CALL
    articleId = 1;

    const [article, setArticle] = useState({});
    // const [firstRelatedOpen, setFirstRelatedOpen] = useState(false);
    // const [secondRelatedOpen, setSecondRelatedOpen] = useState(false);

    useEffect(() => {
        setArticle(resultArticles.find(item => item.id === articleId))
    }, [])

    return(
        <Drawer 
        anchor="bottom"
        open={open}
        PaperProps={{
            sx: {
                width: '100%',
                height: '100%',
            }
        }}
        >
            <TopContainer>
                <Typography sx={{ fontWeight: '700', fontSize: '14px', color: dark, margin: 0 }}>Reading level:</Typography>
                <img style={{ height: '20px', weight: '20px' }} src={close} onClick={() => setOpenDrawer(false)} />
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
                        Object.keys(article.content).map((key) => (
                            <Accordion
                            sx={{
                                boxShadow: 'none'
                            }}
                            >
                                <AccordionSummary
                                expandIcon={<img style={{ height: '28px' }} src={arrowDown} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
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
                <SearchResultContainer item={resultArticles[0]} />
                <SearchResultContainer item={resultArticles[1]} />
            </BottomContainer>
        </Drawer>
    );
}

export default ReadArticle;

ReadArticle.propTypes = {
    open: PropTypes.boolean,
    articleId: PropTypes.number,
    setOpenDrawer: PropTypes.function,
}