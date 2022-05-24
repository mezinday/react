import React, { useContext, useEffect, useState } from "react";
import "../static/fonts/font.css";

import styled from "styled-components";
import Title from "./Common/Title";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import Subtitle from "./Common/Subtitle";
import { Context } from "../store/Store";
import { useHistory } from "react-router-dom";

import emoji1 from "../image/emoji/emoji1.png";
import emoji2 from "../image/emoji/emoji2.png";
import emoji3 from "../image/emoji/emoji3.png";
import emoji4 from "../image/emoji/emoji4.png";
import emoji5 from "../image/emoji/emoji5.png";

const Box = styled.div`
  margin: 7rem 0 0 0.938rem;
  height: 12.25rem;
`;
const Text = styled.div`
  height: 1.563rem;
  margin: 2.75rem 0rem 0rem 0.938rem;
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
const Text2 = styled.div`
  width: 2.938rem;
  height: 1.563rem;
  margin: 2.313rem 0rem 0rem 0.938rem;
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
const Input = styled.input`
  width: 22.5rem;
  height: 3.563rem;
  margin: 0.813rem 0.938rem 0rem 0.938rem;
  border: solid 3px #000;
  border-radius: 90px;
  background-color: #fff;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;
const EmojiConstainer = styled.div`
  width: 22.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const EmojiBox = styled.div`
  width: 7.5rem;
  height: 4.5rem;
  margin: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Emoji = styled.img`
  width: ${(props) => `${emojiWidth[props.index]}rem`};
  height: ${(props) => `${emojiHeight[props.index]}rem`};
`;
const NONE = styled.label`
  width: 4.375rem;
  height: 3.125rem;
  padding: 0.813rem 0.75rem 0.75rem 0.813rem;
  border: solid 2px #000;
  border-radius: 90px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterContainer = styled.div`
  margin-top: 3.813rem;
  margin-bottom: 2rem;
`;

const Circle = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border: 5px solid #d9fe96;
  border-radius: 50%;
`;

const emojiList1 = [emoji1, emoji2, emoji3];
const emojiList2 = [emoji4, emoji5];
const emojiWidth = [5.75, 6.375, 4.375, 2.188, 5.688, 4.375];
const emojiHeight = [1.25, 0.5, 0.563, 3.125, 2.563, 3.125];

const index = () => {
  var localName = window.localStorage.getItem('name');
  const localEmoji = window.localStorage.getItem('emoji');

  var intEmoji;
  if (localEmoji === null) {
    intEmoji = -1;
  } else {
    intEmoji = localEmoji * 1
  }

  if (localName === null) {
    localName = "";
  }
  console.log(intEmoji)
  const history = useHistory();
  const [ name, setName ] = useState(localName);
  const [ emoji, setEmoji ] = useState(localEmoji);
  const [circle, setCircle] = useState(intEmoji);


  const clickHandler = (id) => {
    setEmoji(id);
    setCircle(id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const didTapNext = () => {
    if (circle === -1) {
      alert("이모지를 선택해주세요.")
    } else if (name === "") {
      alert("이름을 입력해주세요");
    } else if (name !== "") {
      var str = name
      var blank_pattern = /^\s+|\s+$/g;
      if(str.replace(blank_pattern, '') == "" ){
          alert('공백만 입력되었습니다.');
      } else {
        window.localStorage.setItem('name', name);
        window.localStorage.setItem('emoji', emoji);
        history.push("/sub3");
      }
    } else {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('emoji', emoji);
      history.push("/sub3");
    }
  };
  return (
    <>
      <Header />

      <Box>
        <Title title={"NAME"} />
        <Title title={"&"} />
        <Title title={"EMOJI."} />
        <Subtitle title={"이름을 입력하고 이모지를 선택하세요"} />
      </Box>

      <Text>NAME</Text>
      <Input
        type="text"
        placeholder="이름"
        value={name}
        maxLength={3}
        onChange={(e) => setName(e.target.value)}
      ></Input>

      <Text2>EMOJI</Text2>
      <EmojiConstainer style={{margin: "1.438rem 0.938rem 0rem 0.938rem"}}>
        {emojiList1.map((emo, id) => (
          <EmojiBox>
            <Emoji
              key={id}
              index={id}
              src={emo}
              onClick={() => clickHandler(id)}
            ></Emoji>
            {circle === id ? <Circle /> : <></>}
          </EmojiBox>
        ))}
      </EmojiConstainer>
      <EmojiConstainer style={{margin: "0rem 0.938rem 0rem 0.938rem"}}>
        {emojiList2.map((emo, id) => (
          <EmojiBox>
            <Emoji
              key={id + 3}
              index={id + 3}
              src={emo}
              onClick={() => clickHandler(id + 3)}
            ></Emoji>
            {circle === id + 3 ? <Circle /> : <></>}
          </EmojiBox>
        ))}
        <EmojiBox>
          <NONE onClick={() => clickHandler(5)}>NONE</NONE>
          {circle === 5 ? <Circle /> : <></>}
        </EmojiBox>
      </EmojiConstainer>

      <FooterContainer>
        <Footer title={"NEXT"} onClick={didTapNext} />
      </FooterContainer>
    </>
  );
};
export default index;
