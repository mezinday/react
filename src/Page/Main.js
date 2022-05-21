import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from "./Common/Header";
import "../static/fonts/font.css";
import Title from "./Common/Title";

const Box = styled.div`
  width: 20.813rem;
  height: 12.25rem;
  margin: 7rem 2.625rem 0rem 0.938rem;
`;
const Ellipse = styled.div`
  width: 9.75rem;
  height: 5.188rem;
  margin: 5.125rem 0 0 0.938rem;
  padding: 0.875rem 1.813rem;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #fff;
`;
const Ellipse2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13.2rem;
  height: 5.1875rem;
  flex-grow: 0;
  padding: 1.087rem 1.258rem 1.46rem 1.403rem;
  border-radius: 90px;
  border: solid 4px #000;
  transform: rotate(-30deg);
  background-color: #fff;
  margin-top: 45px;
  font-size: 3rem;
  font-family: Montserrat_Medium;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -2.4px;
  text-align: left;
  color: #000;
`;
const Ellipse3 = styled.button`
  width: 22.5rem;
  height: 5.188rem;
  flex-grow: 0;
  margin: 1.125rem 0.938rem 0;
  padding: 0.875rem 2rem;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #d9fe96;
`;

const DDay = styled.div`
  width: 6.125rem;
  height: 3.438rem;
  font-family: Montserrat_Medium;
  font-size: 3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -2.4px;
  text-align: left;
  color: #000;
`;
const Ellipse4 = styled.div`
  width: 16.313rem;
  height: 5.188rem;
  margin: 0.875rem 0.313rem 0 0.938rem;
  padding: 0.875rem 1.688rem 0.875rem 1.75rem;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #fff;
  font-family: Montserrat_Medium;
  font-size: 3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -2.4px;
  text-align: left;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ellipse5 = styled.div`
  width: 5.875rem;
  height: 5.188rem;
  margin: 0.875rem 0.938rem 0 0.313rem;
  padding: 0.875rem 1.188rem 0.875rem 1.125rem;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #fff;
  font-family: Montserrat_Medium;
  font-size: 3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -2.4px;
  text-align: left;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
`;

const Letter = styled.div`
  width: 18.5rem;
  height: 3.4375rem;
  font-family: Montserrat_Medium;
  font-size: 3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -2.4px;
  text-align: left;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bottom = styled.div`
  display: flex;
`;

const get_dday = () => {
  var mezin_day = new Date("May 29, 2022 23:59:59").getTime();
  var today = new Date().getTime();
  var diff = mezin_day - today;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};
const index = () => {
  const history = useHistory();
  const dday = get_dday() < 0 ? -get_dday() : get_dday();
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    //request('get','','').then(res => setLetters(res));
  }, []);
  const sendLetter = async () => {
    try {
      history.push("/sub1");
    } catch (e) {}
  };

  return (
    <>
      <Header />
      <Box>
        <Title title={"HAPPY"} />
        <Title title={"BIRTHDAY"} />
        <Title title={"MEZIN!"} />
      </Box>
      <Top>
        <Ellipse>
          <DDay>
            D{get_dday() < 0 ? "+" : "-"}
            {dday == 0 ? "Day" : dday}
          </DDay>
        </Ellipse>
        <Ellipse2>oe9day</Ellipse2>
      </Top>
      <Ellipse3 onClick={sendLetter}>
        <Letter>Send a Letter</Letter>
      </Ellipse3>
      <Bottom>
        <Ellipse4>Received</Ellipse4>
        <Ellipse5>{letters.length}</Ellipse5>
      </Bottom>
    </>
  );
};

export default index;
