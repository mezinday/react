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

const Select = styled.div`
  display: table;
  position: absolute;
  width: 22.5rem;
  height: 17.563rem;

  font-family: 'Montserrat_SemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 17.563rem;

  text-align: center;
  vertical-align: middle;
  letter-spacing: -0.05em;

  color: #D9FE96;
  -webkit-text-stroke: 1px #000;
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
  const context = useContext(Context);
  const { paper, setPaper } = context;

  const [swiperSetting, setSwiperSetting] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const history = useHistory();
  const didTapNext = () => {
    window.localStorage.setItem('image', paper)
    history.push("/sub2");
  };


  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        spaceBetween: 5,
        centeredSlides: true,
        slidesPerView: 1,
        pagination: {
          clickable: true,
        },
        navigation: {
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        },
        onBeforeInit: (swiper) => {
          setTimeout(() => {
            if (typeof swiper.params.navigation !== "boolean") {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        },
      });
    }
  }, [swiperSetting]);


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
              <Select>SELECT</Select>
            <Letter src={mezin1} />
          </SwiperSlide>
          <SwiperSlide>
            <Select>SELECT</Select>
            <Letter src={mezin2} />
          </SwiperSlide>
          <SwiperSlide>
            <Select>SELECT</Select>
            <Letter src={mezin3} />
          </SwiperSlide>
          <SwiperSlide>
            <Select>SELECT</Select>
            <Letter src={mezin4} />
          </SwiperSlide>
          <SwiperSlide>
            <Select>SELECT</Select>
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
