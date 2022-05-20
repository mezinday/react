import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import Header from './Common/Header';
import "../static/fonts/font.css";
import Title from './Common/Title';

const Wrapper = styled.div`

`

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
  width: 10.65rem;
  height: 8.1312rem;
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
  width: 9.75rem;
  height: 5.1875rem;
  margin: 82px 0 18px 15px;
  padding: 14px 29px;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #fff;
`

const Ellipse2 = styled.div`
  width: 13.2rem;
  height: 5.1875rem;
  flex-grow: 0;
  padding: 17.4px 20.1px 17.4px 22.5px;
  border-radius: 90px;
  border: solid 4px #000;
  transform: rotate(-30deg);
  background-color: #fff;
  margin-top: 45px;
`

const Ellipse3 = styled.button`
  width: 22.5rem;
  flex-grow: 0;
  margin: 2.1px 15px;
  padding: 14px 32px 14px 32px;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #d9fe96;
`

const DDay = styled.div`
  width: 6.125rem;
  height: 3.4375rem;
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
const Ellipse4 = styled.div`
  width: 15.95rem;
  margin: 15px 0 18px 15px;
  padding: 14px 23px;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #fff;
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

const Ellipse5 = styled.div`
  width: 6.25rem;
  margin: 18px 3px;
  padding: 14px;
  padding-left: 18px;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #fff;
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

const Top = styled.div`
  display: flex;
`

const Letter = styled.div`
  width: 18.5rem;
  height: 3.4375rem;
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

const Bottom = styled.div`
  display: flex;
`


const index = () => {

  const history = useHistory();

  const sendLetter = async () => {
    try {
      history.push("/sub1");
    } catch (e) {
    }
  };


  return (
    <Wrapper>
      <Header/>
      <Box>
        <Title title={"HAPPY"}/>
        <Title title={"BIRTHDAY"}/>
        <Title title={"MEZIN!"}/>
      </Box>
      <Top>
        <Ellipse>
          <DDay>
            D-19
          </DDay>
        </Ellipse>
        <Ellipse2>
          <Oe9day>
          oe9day
          </Oe9day>
        </Ellipse2>
      </Top>
      <Ellipse3 onClick={sendLetter}>
        <Letter>Send a Letter</Letter>
      </Ellipse3>
      <Bottom>
        <Ellipse4>
          Received
        </Ellipse4>
        <Ellipse5>
          24
        </Ellipse5>
      </Bottom>
    </Wrapper>
  )
}

export default index