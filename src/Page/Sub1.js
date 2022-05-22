import React, { useContext } from "react";
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

const index = () => {
  const context = useContext(Context);
  const { setPaper } = context;
  const history = useHistory();
  const didTapNext = () => {
    history.push("/sub2");
  };

  return (
    <>
      <Header />
      <Box>
        <Title title={"SELECT"} />
        <Title title={"THE"} />
        <Title title={"PAPER."} />
        <Subtitle title={"편지지를 선택하세요"}/>
      </Box>
      <Swiper
        slidesPerView={1}
        onSlideChange={(e) => setPaper(e.activeIndex)}
        style={{
          width: "22.5rem",
          height: "17.563rem",
          margin: "5.125rem 0.938rem 0rem",
        }}
      >
        <SwiperSlide>
          <Letter src={mezin1} />
        </SwiperSlide>
        <SwiperSlide>
          <Letter src={mezin2} />
        </SwiperSlide>
        <SwiperSlide>
          <Letter src={mezin3} />
        </SwiperSlide>
        <SwiperSlide>
          <Letter src={mezin4} />
        </SwiperSlide>
        <SwiperSlide>
          <Letter src={mezin5} />
        </SwiperSlide>
      </Swiper>
      <FooterContainer>
        <Footer title={"NEXT"} onClick={didTapNext} />
      </FooterContainer>
    </>
  );
};
export default index;
