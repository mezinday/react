import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Title from "./Common/Title";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import "../static/fonts/font.css";

const Box = styled.div`
  margin: 7rem 0 0 0.938rem;
`;
const Subtitle = styled.div`
  margin-top: 4rem;
  font-family: "Montserrat_SemiBold";
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.75px;
`;
const FooterContainer = styled.div`
  margin-top: 26.562rem;
  margin-bottom: 2rem;
`;
const index = () => {
  const history = useHistory();
  const didTapMain = () => {
    history.push("/");
  };

  return (
    <>
      <Header />
      <Box>
        <Title title={"기메진"} />
        <Title title={"바보멍청이"} />
        <Subtitle>역시 우리의 예상대로 기메진은 바보였다!</Subtitle>
      </Box>

      <FooterContainer>
        <Footer title={"MAIN"} onClick={didTapMain} />
      </FooterContainer>
    </>
  );
};
export default index;
