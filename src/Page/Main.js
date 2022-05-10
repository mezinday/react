import React from 'react'
import styled from "styled-components";
import Header from './Common/Header';

const MainComment = styled.div`
  font-size: 40px;
`
const Box = styled.div`
`


const index = () => {
  return (
    <>
      <Header/>
      <Box>
        <MainComment>HAPPY</MainComment>
        <MainComment>BIRTHDAY</MainComment>
        <MainComment>MEZIN!</MainComment>
      </Box>
    </>
  )
}

export default index