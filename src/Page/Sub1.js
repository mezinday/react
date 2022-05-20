import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Title from './Common/Title';
import Header from './Common/Header';
import Footer from './Common/Footer';
import { Context } from '../store/Store';
import '../static/fonts/font.css';


const Box = styled.div`
    margin: 7rem 2.625rem 5.125rem 0.938rem;
    height: 12.25rem;
`; 

const index = () => {
    const context = useContext(Context);
    const {setPaper} = context;
    const history = useHistory();
    const didTapNext = () => {
        history.push("/sub2");
    }
    return (
        <>
            <Header/>
            <Box>
                <Title title={"SELECT"}/>
                <Title title={"THE"}/>
                <Title title={"PAPER."}/>
            </Box>
            /*swiper*/
            <Footer title={"NEXT"} onClick={didTapNext}/>
        </>
    );
}
export default index;