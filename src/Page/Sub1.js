import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Title from './Common/Title';
import Header from './Common/Header';
import Footer from './Common/Footer';
import { Context } from '../store/Store';
import '../static/fonts/font.css';

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
const Swiper = styled.div`
    width: 22.5rem;
    height: 17.563rem;
    margin: 5.125rem 0.938rem 0rem;
    padding: 8.125rem 10.375rem 8.188rem 10.438rem;
    background-color: #c4c4c4;
`;

const FooterContainer = styled.div`
    margin: 3.813rem;
`;
const index = () => {
    const context = useContext(Context);
    const {setPaper} = context;
    const history = useHistory();
    const didTapNext = () => {
        history.push("/sub2");
    }
    return (
        <ROOT>
            <Container>
                <Header/>
                <Box>
                    <Title title={"SELECT"}/>
                    <Title title={"THE"}/>
                    <Title title={"PAPER."}/>
                </Box>
                <Swiper>

                </Swiper>
                <FooterContainer>
                    <Footer title={"NEXT"} onClick={didTapNext}/>
                </FooterContainer>
            </Container>
        </ROOT>
    );
}
export default index;