import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Title from "./Common/Title";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { Context } from "../store/Store";
import { useHistory } from "react-router-dom";
import "../static/fonts/font.css";
import mezin1 from "../image/mezin1.png";
import mezin2 from "../image/mezin2.png";
import mezin3 from "../image/mezin3.png";
import mezin4 from "../image/mezin4.png";
import mezin5 from "../image/mezin5.png";

const Box = styled.div`
  margin: 7rem 0 0 0.938rem;
  height: 12.25rem;
`;
const LetterContainer = styled.div`
  position: relative;
  margin: 5.125rem 0.938rem 0rem;
  width: 22.5rem;
  height: 17.563rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Letter = styled.img`
  position: absolute;
  top: 0px;
  width: 22.5rem;
  height: 17.563rem;
`;
const TextArea = styled.textarea`
  position: absolute;
  margin-top: ${(props) => (props.paper == 4 ? "2.4rem" : "2rem")};
  width: 20.625rem;
  height: 13.125rem;
  font-family: Montserrat_SemiBold;
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.75px;
  text-align: left;
  color: #000;
  border: none;
  overflow: auto;
  outline: none;
  resize: none;
  background: transparent;
`;
const FooterContainer = styled.div`
  margin-top: 3.813rem;
  margin-bottom: 2rem;
`;
const letterList = [mezin1, mezin2, mezin3, mezin4, mezin5];
const index = () => {
  const context = useContext(Context);
  const { paper } = context;
  const [letter, setLetter] = useState("");
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const didTapNext = () => {
    history.push("/sub4");
  };
  return (
    <>
      <Header />
      <Box>
        <Title title={"SEND"} />
        <Title title={"YOUR"} />
        <Title title={"LETTER."} />
      </Box>
      <LetterContainer>
        <Letter src={letterList[paper]}></Letter>
        <TextArea
          paper={paper}
          placeholder="여기에 입력하세요"
          value={letter}
          onChange={(e) => setLetter(e.target.text)}
        ></TextArea>
      </LetterContainer>

      <FooterContainer>
        <Footer title={"NEXT"} onClick={didTapNext} />
      </FooterContainer>
    </>
  );
};
export default index;
