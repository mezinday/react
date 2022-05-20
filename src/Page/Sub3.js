import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Title from './Common/Title';
import Header from './Common/Header';
import Footer from './Common/Footer';
import { Context } from '../store/Store';
import '../static/fonts/font.css';

const Box = styled.div`
    width: 20.813rem;
    height: 12.25rem;
    margin: 7rem 2.625rem 0rem 0.938rem;
`;

const didTapNext = () => {
    alert('clicked');
}
  
const index = () => {
    const context = useContext(Context);
    const {paper} = context;
    const [letter, setLetter] = useState('');

    return (
        <>
            <Header/>
            <Box>
                <Title title={"SEND"}/>
                <Title title={"YOUR"}/>
                <Title title={"LETTER."}/>
            </Box>
            {paper}
            <Footer title={"NEXT"} onClick={didTapNext}/>
        </>
    );
}
export default index;