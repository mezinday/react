import React, { useContext } from 'react';
import '../static/fonts/font.css';

import styled from 'styled-components';
import Title from './Common/Title';
import Footer from './Common/Footer';
import Header from './Common/Header';
import { Context } from '../store/Store';

import emoji1 from'../image/emoji/emoji1.png';
import emoji2 from'../image/emoji/emoji2.png';
import emoji3 from'../image/emoji/emoji3.png';
import emoji4 from'../image/emoji/emoji4.png';
import emoji5 from'../image/emoji/emoji5.png';
const TOP = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
`
const Box = styled.div`
    width: 20.813rem;
    height: 12.25rem;
    margin: 7rem 2.625rem 0rem 0.938rem;
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
`
const EmojiConstainer = styled.div`
    width: 22.5rem;
    margin: 1.438rem 0.938rem 0rem 0.938rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const EmojiBox = styled.div`
    width: auto;
    height: 4.5rem;
    margin: 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Emoji = styled.img`
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
`
const FooterContainer = styled.div`
  margin: 5.438rem 5.875rem 0rem 4.438rem;
`;
const emojiList1 = [
    emoji1, emoji2,emoji3,
]
const emojiList2 = [
    emoji4, emoji5
]
const index = () => {
    const context = useContext(Context);
    const {name, setName} = context;
    const {emoji, setEmoji} = context;

    const didTapNext = () => {
        alert(name);
    }
    return (
        <TOP>
            <Container>
                <Header/>

                <Box>
                    <Title title={"NAME"}/>
                    <Title title={"&"}/>
                    <Title title={"EMOJI."}/>
                </Box>

                <Text>NAME</Text>
                <Input type='text' placeholder='이름' maxLength={3} onChange={(e) => setName(e.target.value)}></Input>

                <Text2>EMOJI</Text2>
                <EmojiConstainer>
                    {emojiList1.map((emo, id) => <EmojiBox><Emoji src={emo} onClick={() => setEmoji(id)}></Emoji></EmojiBox>)}
                </EmojiConstainer>
                <EmojiConstainer>
                    {emojiList2.map((emo, id) => <EmojiBox><Emoji src={emo} onClick={() => setEmoji(id + 3)}></Emoji></EmojiBox>)}
                    <EmojiBox>
                        <NONE onClick={() => setEmoji(5)}>NONE</NONE>
                    </EmojiBox>
                </EmojiConstainer>

                <FooterContainer>
                    <Footer title={"NEXT"} onClick={didTapNext}/>
                </FooterContainer>
            </Container>
        </TOP>
    );
}
export default index;