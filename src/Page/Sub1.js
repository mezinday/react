import React, { useContext, useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Title from "./Common/Title";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Subtitle from "./Common/Subtitle";
import { Context } from "../store/Store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../static/fonts/font.css";
import mezin1 from "../image/mezin1.png";
import mezin2 from "../image/mezin2.png";
import mezin3 from "../image/mezin3.png";
import mezin4 from "../image/mezin4.png";
import mezin5 from "../image/mezin5.png";
import selectImg from "../image/select.png";
import prev from "../image/prev.svg";
import next from "../image/next.svg";

const Box = styled.div`
  margin: 7rem 0 0 0.938rem;
  height: 12.25rem;
`;
const FooterContainer = styled.div`
  margin: 3.813rem;
  margin-bottom: 2rem;
`;

const Letter = styled.img`
  width: 22.5rem;
  height: 17.563rem;
`;

const Select = styled.img`
  position: absolute;
  width: 22.5rem;
  height: 17.563rem;
`
const SwiperContainer = styled.div`
  position: relative;
  width: 22.5rem;
  height: 17.563rem;
  margin: 5.125rem 0.938rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper {
    &-button-disabled {
      visibility: hidden;
    }
  }
`;

const SwiperButtonImage = styled.img`
  position : absolute;
  width: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  background: none;
  width: 1rem;
  height: 2rem;
`;

const index = () => {

  var localImage = window.localStorage.getItem('image');

  if (localImage === null) {
    localImage = -1;
  } else {
    localImage *= 1
  }

  const context = useContext(Context);
  const { paper, setPaper } = context;

  const [swiperSetting, setSwiperSetting] = useState(null);
  const [select, setSelect] = useState(localImage)
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);
  const history = useHistory();
  const didTapNext = () => {
    if (select === -1) {
      alert('편지지를 선택해주세요.')
    } else {
      window.localStorage.setItem('image', select)
      history.push("/sub2");
    }
  };

  const selectHandler = (e) => {
    setSelect(paper);
  }


  return (
    <>
      <Header />
      <Box>
        <Title title={"SELECT"} />
        <Title title={"THE"} />
        <Title title={"PAPER."} />
        <Subtitle title={"편지지를 선택하세요"}/>
      </Box>
      <SwiperContainer>
        <Swiper
          slidesPerView={1}
          onSlideChange={(e) => setPaper(e.activeIndex)}
          // style={{
          //   width: "22.5rem",
          //   height: "17.563rem",
          //   margin: "5.125rem 0.938rem 0rem",
          // }}
        >
          <SwiperSlide>
            {select === 0 ? <Select src={selectImg}/> : <></>}
            <Letter onClick={selectHandler} src={mezin1} />
          </SwiperSlide>
          <SwiperSlide onClick={selectHandler}>
            {select === 1 ? <Select src={selectImg}/> : <></>}
            <Letter src={mezin2} />
          </SwiperSlide>
          <SwiperSlide onClick={selectHandler}>
            {select === 2 ? <Select src={selectImg}/> : <></>}
            <Letter src={mezin3} />
          </SwiperSlide>
          <SwiperSlide onClick={selectHandler}>
            {select === 3 ? <Select src={selectImg}/> : <></>}
            <Letter src={mezin4} />
          </SwiperSlide>
          <SwiperSlide onClick={selectHandler}>
            {select === 4 ? <Select src={selectImg}/> : <></>}
            <Letter src={mezin5} />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
      <FooterContainer>
        <Footer title={"NEXT"} onClick={didTapNext} />
      </FooterContainer>
    </>
  );
};
export default index;
