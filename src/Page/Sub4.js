import React from "react";
import styled from "styled-components";
import Title from "./Common/Title";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { useHistory } from "react-router-dom";
import "../static/fonts/font.css";

const Box = styled.div`
  margin: 7rem 0 0 0.938rem;
  height: 12.25rem;
`;
const TextContainer = styled.div`
  margin-top: 5.125rem;
  margin-left: 0.938rem;
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
const FooterContainer = styled.div`
  margin-top: 18.25rem;
  margin-bottom: 2rem;
`;
const index = () => {
  const history = useHistory();
  const didTapNext = () => {
    history.push("/sub5");
  };
  return (
    <>
      <Header />
      <Box>
        <Title title={"The letter is"} />
        <Title title={"on its way"} />
        <Title title={"to Mezin..."} />
      </Box>

      <TextContainer>
        <Text>당신의 소중한 편지가 저장되었습니다.</Text>
        <Text>편지는 5월 29일에 메진에게 전달됩니다.</Text>
      </TextContainer>

      <FooterContainer>
        <Footer title={"MAIN"} onClick={didTapNext} />
      </FooterContainer>
    </>
  );
};
export default index;
