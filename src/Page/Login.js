import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Title from "./Common/Title";
import Header from "./Common/Header";
import "../static/fonts/font.css";

const Box = styled.div`
  margin: 7rem 0 0 0.938rem;
`;
const Subtitle = styled.div`
  margin-top: 0.625rem;
  font-family: "Montserrat_SemiBold";
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.75px;
`;
const Rectangle = styled.div`
  width: 22.5rem;
  height: 5.188rem;
  margin-left: 0.938rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #fff;
`;
const Input = styled.input`
  width: 9rem;
  border: none;
  overflow: auto;
  outline: none;
  resize: none;
  background: transparent;
  text-align: center;
  &::placeholder {
    font-family: "Montserrat_Medium";
    font-size: 0.938rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.67;
    letter-spacing: -0.75px;
    color: #000;
  }
`;
const ButtonText = styled.span`
  font-family: "Montserrat_Medium";
  font-size: 3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -2.4px;
  text-align: center;
  color: #000;
`;
const FooterContainer = styled.div`
  margin-top: 10.063rem;
  margin-bottom: 0.438rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FotterTitle = styled.div`
  font-family: "Montserrat_SemiBold";
  font-size: 0.75rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: -0.6px;
  text-align: left;
  color: #777;
`;
const Copyright = styled.div`
  width: 3rem;
  height: 0.938rem;
  margin: 0.438rem 0 0 0;
  font-family: "Montserrat_Light";
  font-size: 0.5rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.4px;
  text-align: left;
  color: #d4d4d4;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: solid 3px #000;
  background-color: #fff;
  border-radius: 90px;
  top: 50%;
  left: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const ModalComment = styled.div`
  font-family: "Montserrat_SemiBold";
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.75px;
  color: #000;
`;

const BackButton = styled.div`
  position: absolute;
  font-family: "Montserrat_SemiBold";
  bottom: 1rem;
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.75px;
  color: #000;
`;
const index = () => {
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();
  const didTapNext = () => {
    if ("kingmezin" === password) {
      alert("correct!");
    } else {
      setModalOpen(true);
    }
  };
  const modalToggle = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Header />
      <Box>
        <Title title={"MEZIN"} />
        <Title title={"PASS-"} />
        <Title title={"WORD"} />
        <Subtitle>메진 본인만 열람 가능합니다.</Subtitle>
      </Box>
      <Rectangle
        style={{
          marginTop: "5.688rem",
        }}
      >
        <Input
          type="text"
          name="pw"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요."
        ></Input>
      </Rectangle>
      <Rectangle
        onClick={didTapNext}
        style={{
          marginTop: "0.438rem",
          backgroundColor: "#d9fe96",
        }}
      >
        <ButtonText>LOGIN</ButtonText>
      </Rectangle>
      <FooterContainer>
        <FotterTitle onClick={didTapNext}>비밀번호를 잊으셨습니까?</FotterTitle>
        <Copyright>©YUNKIMJO</Copyright>
      </FooterContainer>
      {modalOpen ? (
        <Background>
          <ModalContainer>
            <Container>
              <ModalComment>비밀번호가 일치하지 않습니다</ModalComment>
              <BackButton onClick={modalToggle}>BACK</BackButton>
            </Container>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};
export default index;
