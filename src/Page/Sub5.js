import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import Title from "./Common/Title";
import Header from "./Common/Header";
import { useHistory } from "react-router-dom";

import emoji1 from "../image/emoji/emoji1.png";
import emoji2 from "../image/emoji/emoji2.png";
import emoji3 from "../image/emoji/emoji3.png";
import emoji4 from "../image/emoji/emoji4.png";
import emoji5 from "../image/emoji/emoji5.png";
import "../static/fonts/font.css";

const Box = styled.div`
  margin: 7rem 0 0 0.938rem;
  height: 12.25rem;
`;
const TextContainer = styled.div`
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
const PreviewContainer = styled.div`
  width: 22.439rem; 
  margin: 4.063rem 0.938rem 0 0.938rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
const Circle = styled.div`
  position: relative; 
  &:nth-child(3n + 2) {
    margin: 0 0.625rem;
  }
  margin: 0.625rem 0;
  width: 7.063rem;
  height: 7.063rem;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Emoji = styled.img`
  width: ${(props) => `${emojiWidth[props.index]}rem`};
  height: ${(props) => `${emojiHeight[props.index]}rem`};
`;
const Name = styled.div`
  position: absolute;
  bottom: 0.25rem;
  font-family: Montserrat_SemiBold;
  font-size: 0.75rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: -0.6px;
  text-align: left;
  color: #000;
`;
const emojiList = [emoji1, emoji2, emoji3, emoji4, emoji5];
const emojiWidth = [5.75, 6.375, 4.375, 1.688, 5.688, 4.375];
const emojiHeight = [1.25, 0.5, 0.563, 2.375, 2.563, 3.125];
const index = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  const [letterList, setLetterList] = useState([]);
  const history = useHistory();

  const didTapNext = () => {
    history.push("/main");
  };
  const fetchLetter = async () => {
    try {
      setError(false);
      setLoading(true);
      const { data } = await axios.get(
        process.env.REACT_APP_API_ROOT + "api/v1/letters"
      );
      setLetterList(data.data);
      setCount(data.count);
    } catch (e) {
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
        <Title title={count} />
        <Title title={"LETTER"} />
        <Title title={"RECEIVED"} />
      </Box>
      <TextContainer>
        <Text>편지는 5월 29일 00:00 부터 볼 수 있어요</Text>
      </TextContainer>
      <PreviewContainer>
        {letterList.map(({emoji, name}, id) => (
          <Circle key={id}>
            {emoji < 5 ? <Emoji index={emoji} src={emojiList[emoji]} /> : null}
            <Name>{name}</Name>
        </Circle>
        ))}
      </PreviewContainer>
    </>
  );
};
export default index;
