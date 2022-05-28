import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Title from "./Common/Title";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import "../static/fonts/font.css";
import mezin1 from "../image/mezin1.png";
import mezin2 from "../image/mezin2.png";
import mezin3 from "../image/mezin3.png";
import mezin4 from "../image/mezin4.png";
import mezin5 from "../image/mezin5.png";

const Box = styled.div`
  margin: 7rem 0 0 0.938rem;
`;
const PaperContainer = styled.div`
  position: relative;
  margin: 3.25rem 0.938rem 0rem;
  width: 22.5rem;
  height: 17.563rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Paper = styled.img`
  position: absolute;
  top: 0px;
  width: 22.5rem;
  height: 17.563rem;
  z-index: 0;
`;
const TextArea = styled.div`
  position: absolute;
  margin-top: ${(props) => (props.paper == 4 ? "2rem" : "0rem")};
  word-break: break-all;
  white-space: pre-wrap;
  padding: 0 1rem;
  width: ${(props) => (props.paper == 4 ? "20.5rem" : "22.5rem")};
  height: ${(props) => (props.paper == 4 ? "11.5rem" : "13.125rem")};
  font-family: Montserrat_SemiBold;
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.75px;
  color: #000;
  border: none;
  overflow: auto;
  outline: none;
  resize: none;
  z-index: 1;
  background: transparent;
`;
const FooterContainer = styled.div`
  margin-top: 11.313rem;
  margin-bottom: 2rem;
`;
const PaperList = [mezin1, mezin2, mezin3, mezin4, mezin5];
const index = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [paper, setPaper] = useState(null);
  const [content, setContent] = useState("");
  const history = useHistory();

  const didTapNext = () => {
    history.goBack();
  };
  const fetchLetter = async () => {
    try {
      setError(false);
      setLoading(true);
      const { data } = await axios.get(
        `https://www.mezin.day/api/v1/letters/${location.state.id}`
      );
      setName(data.name);
      setPaper(data.image);
      setContent(data.content);
    } catch (e) {
      console.log(e);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLetter();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <Box>
          <Title title={"로딩중...."}></Title>
        </Box>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Header />
        <Box>
          <Title title={"에러가"}></Title>
          <Title title={"발생했습니다."}></Title>
        </Box>
      </>
    );
  }
  return (
    <>
      <Header />
      <Box>
        <Title title={`${name}'s`} />
        <Title title={"LETTER"} />
      </Box>

      <PaperContainer>
        <Paper src={PaperList[paper]}></Paper>
        <TextArea paper={paper}>{content}</TextArea>
      </PaperContainer>

      <FooterContainer>
        <Footer title={"PREV"} onClick={didTapNext} />
      </FooterContainer>
    </>
  );
};
export default index;
