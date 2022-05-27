import React from "react";
import styled from "styled-components";
import Title from "./Common/Title";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import "../static/fonts/font.css";

const Top = styled.div`
  margin: 7.5rem 0 0 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Mid = styled.div`
  margin: 7.438rem 0 0 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Bottom = styled.div`
  margin: 7.438rem 0 0 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-family: Montserrat_SemiBold;
  font-size: 1.5rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 1.2px;
  color: #000;
`;
const FooterContainer = styled.div`
  font-family: Inter;
  font-size: 3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.04;
  letter-spacing: normal;
  text-align: left;
  color: #000;

  margin-top: 5.562rem;
  margin-bottom: 1.688rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const index = () => {
  return (
    <>
      <Header />
      <Top>
        <Title title={"HAPPY"} />
        <Title title={"MEZIN DAY"} />
      </Top>
      <Mid>
        <Title title={"5/29"} />
      </Mid>
      <Bottom>
        <Title title={"윤,킴,조"} />
        <Text>all right reserved</Text>
      </Bottom>
      <FooterContainer>🎂</FooterContainer>
    </>
  );
};
export default index;
