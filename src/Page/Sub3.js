import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import dotenv from "dotenv";
import { useBeforeunload } from "react-beforeunload";
dotenv.config();

import Title from "./Common/Title";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Subtitle from "./Common/Subtitle";
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

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const ModalContainer = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  width: 19.75rem;
  height: 11.875rem;
  padding: 50px 67px;
  border: solid 3px #000;
  background-color: #fff;
  border-radius: 90px;
  top: 54%;
  left: 50%;
  text-align: center;
`;

const ModalComment = styled.div`
  width: 11.375rem;
  height: 1.875rem;
  margin: 0 0 0;
  font-family: Montserrat_SemiBold;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.75px;
  text-align: left;
  color: #000;
`;

const Wrapper = styled.div`
  display: flex;
`;
const OkButton = styled.div`
  width: 1.75rem;
  height: 1.875rem;
  margin: 30px 126px 0 0;
  font-family: Montserrat_SemiBold;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.75px;
  text-align: left;
  color: #000;
`;

const NoButton = styled.div`
  width: 1.5625rem;
  height: 1.875rem;
  margin: 30px 3px 0 0;
  font-family: Montserrat_SemiBold;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.75px;
  text-align: left;
  color: #000;
`;

const letterList = [mezin1, mezin2, mezin3, mezin4, mezin5];
const index = () => {
  useBeforeunload((event) => event.preventDefault());
  var localContent = window.localStorage.getItem("content");
  // const context = useContext(Context);
  // const { name, emoji, paper } = context;

  if (localContent === null) {
    localContent = "";
  }

  const [letter, setLetter] = useState(localContent);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();

  let name = window.localStorage.getItem("name");
  let emoji = window.localStorage.getItem("emoji");
  let image = window.localStorage.getItem("image");

  const modalToggle = () => {
    setModalOpen(!modalOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const postLetter = async () => {
    try {
        await axios.post(
        "https://www.mezin.day/api/v1/letters/create",
        {
          name: name,
          emoji: emoji,
          image: image,
          content: letter,
        }
      );
    } catch (e) {
      setError(true);
    }
  };
  const didTapNext = () => {
    var str = letter;
    var blank_pattern = /^\s+|\s+$/g;
    if (str.replace(blank_pattern, "") == "") {
      alert("????????? ?????????????????????.");
    } else {
      window.localStorage.setItem("content", letter);
      postLetter();
      history.push("/sub4");
    }
  };
  return (
    <>
      <Header />
      <Box>
        <Title title={"SEND"} />
        <Title title={"YOUR"} />
        <Title title={"LETTER."} />
        <Subtitle title={"??????????????? ???????????????"} />
      </Box>
      <LetterContainer>
        <Letter src={letterList[image]}></Letter>
        <TextArea
          paper={image}
          placeholder="????????? ???????????????"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
        ></TextArea>
      </LetterContainer>

      <FooterContainer>
        <Footer title={"NEXT"} onClick={modalToggle} />
      </FooterContainer>
      {modalOpen ? (
        <Background>
          <ModalContainer>
            <ModalComment>??????????????? ?????????????????????????</ModalComment>
            <Wrapper>
              <OkButton onClick={didTapNext}>YES</OkButton>
              <NoButton onClick={modalToggle}>NO</NoButton>
            </Wrapper>
          </ModalContainer>
        </Background>
      ) : null}
      {error ? (
        <Background>
          <ModalContainer>
            <ModalComment>?????? ??????!</ModalComment>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};
export default index;
