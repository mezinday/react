import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Common/Title';
import Header from './Common/Header';
import { Context } from '../store/Store';
import { useHistory } from 'react-router-dom';

import '../static/fonts/font.css';

const Box = styled.div`
    width: 20.813rem;
    height: 12.25rem;
    margin: 7rem 2.625rem 0rem 0.938rem;
`;
const Text = styled.div`
    font-family: Montserrat_SemiBold;
    font-size: 0.938rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: -0.75px;
    text-align: left;
    color: #000;
`;
const Circle = styled.div`
    width: 7.063rem;
    height: 7.063rem;
    border-radius: 90px;
    border: solid 4px #000;
    background-color: #fff;
`;
const didTapNext = () => {
    alert('clicked');
}
  
const index = () => {
    const [count, setCount] = useState(0);
    const [letter, setLetter] = useState([]);
    const history = useHistory();
    const didTapNext = () => {
        history.push("/main");
    }
    return (
        <>
            <Header/>
            <Box>
                <Title title={count}/>
                <Title title={"LETTER"}/>
                <Title title={"RECEIVED"}/>
            </Box>
            <Text>당신의 소중한 편지가 저장되었습니다.</Text>
            <Text>편지는 5월 29일에 메진에게 전달됩니다.</Text>
        </>
    );
}
export default index;