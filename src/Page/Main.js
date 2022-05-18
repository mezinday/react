import React from 'react'
import styled from "styled-components";
import Header from './Common/Header';
import "../static/fonts/font.css";

const MainComment = styled.div`
  font-family: Montserrat_SemiBold;
  font-size: 58px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.95;
  letter-spacing: -2.9px;
  text-align: left;
  color: #000;
`
const Box = styled.div`
  margin-top: 112px;
  margin-left: 15px;
  height: 196px;
`

const Oe9day = styled.div`
  width: 170.4px;
  height: 130.1px;
  flex-grow: 0;
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -2.4px;
  text-align: left;
  color: #000;
`

const Ellipse = styled.div`
  width: 156px;
  height: 83px;
  margin: 82px 0 18px 15px;
  padding: 14px 29px;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #fff;
`

const Ellipse2 = styled.div`
  width: 156px;
  height: 83px;
  flex-grow: 0;
  margin-left: 15px;
  padding: 17.4px 20.1px 23.4px 22.5px;
  border-radius: 90px;
  border: solid 4px #000;
  transform: rotate(-30deg);
  background-color: #fff;
`

const Ellipse3 = styled.button`
  width: 360px;
  height: 83px;
  flex-grow: 0;
  margin: 2.1px 15px 190px;
  padding: 14px 32px;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #d9fe96;
`

const DDay = styled.div`
  width: 98px;
  height: 55px;
  font-family: Montserrat_Medium;
  font-size: 48px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -2.4px;
  text-align: left;
  color: #000;
`

const Letter = styled.div`
  width: 296px;
  height: 55px;
  font-family: Montserrat_Medium;
  font-size: 48px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -2.4px;
  text-align: left;
  color: #000;
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
      <Ellipse> <DDay>D-19</DDay></Ellipse>
      <Ellipse2>
        <Oe9day>
        oe9day
        </Oe9day>
      </Ellipse2>
      <Ellipse3><Letter>Send a Letter</Letter></Ellipse3>
    </>
  )
}

export default index