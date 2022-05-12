import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { request } from '../utils/axios';
import Header from './Common/Header';

const MainComment = styled.div`
  font-size: 40px;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const get_dday = () => {
  var mezin_day = new Date("May 13, 2022 23:59:59").getTime();
  var today = new Date().getTime();
  var diff = mezin_day - today;
  return Math.floor(diff / (1000*60*60*24));
}
const index = () => {
  let dday = (get_dday() < 0 ? -get_dday() : get_dday());
  const [letters, setLetters] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    //request('get','','').then(res => setLetters(res));
    setCount(letters.length);
  }, []);

  return (
    <>
      <Header/>
      <Box>
        <MainComment>HAPPY</MainComment>
        <MainComment>BIRTHDAY</MainComment>
        <MainComment>MEZIN!</MainComment>
      </Box>
      <Box><MainComment>D{get_dday() < 0 ? "+" : "-"}{dday == 0 ? "Day" : dday}</MainComment></Box>
      <Box><MainComment>Received {count}</MainComment></Box>
    </>
  )
}

export default index