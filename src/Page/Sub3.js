import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Title from './Common/Title';
import Header from './Common/Header';
import Footer from './Common/Footer';
import { Context } from '../store/Store';
import { useHistory } from 'react-router-dom';
import '../static/fonts/font.css';
import mezin1 from '../image/mezin1.svg';
const ROOT = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
`;
const Container = styled.div`
`

const Box = styled.div`
    margin: 7rem 0 0 0.938rem;
    height: 12.25rem;
`; 
const Background = styled.div`
    margin: 5.125rem 0.938rem 0rem;
    width: 22.5rem;
    height: 17.563rem;
`;
const PaperContainer = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 2.188rem 0.938rem 2.25rem;
    font-family: Montserrat_SemiBold;
    font-size: 0.938rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: -0.75px;
    text-align: left;
    color: #000;
    border: none;
    overflow: auto;
    outline: none;
    resize: none;
    background: transparent;

`;
const FooterContainer = styled.div`
    margin: 3.813rem;
`;
const letterList = [
    mezin1, mezin1, mezin1, mezin1, mezin1
]
const index = () => {
    const context = useContext(Context);
    const {paper} = context;
    const [letter, setLetter] = useState('');
    const history = useHistory();
    const didTapNext = () => {
        history.push("/sub4");
    }
    return (
        <ROOT>
            <Container>
                <Header/>
                <Box>
                    <Title title={"SEND"}/>
                    <Title title={"YOUR"}/>
                    <Title title={"LETTER."}/>
                </Box>
                <Background style={{ backgroundImage: `url(${letterList[paper]})` }}>
                    <PaperContainer placeholder="여기에 입력하세요" value={letter} onChange={(e) => setLetter(e.target.text)}>
                    </PaperContainer>
                </Background>

                <FooterContainer>
                    <Footer title={"NEXT"} onClick={didTapNext}/>
                </FooterContainer>
                
            </Container>
        </ROOT>
    );
}
export default index;