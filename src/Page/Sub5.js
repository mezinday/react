import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
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
import prev from "../image/prev.svg";
import next from "../image/next.svg";

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
const SwiperContainer = styled.div`
  width: 22.563rem;
  margin: 5rem 0.938rem 4.062rem 0.938rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper {
    &-button-disabled {
      visibility: hidden;
    }
  }
`;
const PreviewContainer = styled.div`
  width: 20.563rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Circle = styled.div`
  position: relative;
  margin: 0.562rem 0.3125rem;
  &:nth-child(3n + 2) {
    margin: 0 0.562rem;
  }
  width: 6rem;
  height: 6rem;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: ${({ idx, activeIdx }) =>
    idx === activeIdx ? "#d9fe96" : "#fff"};
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
const NavigationButton = styled.button`
  width: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  background: none;
`;
const SwiperButtonImage = styled.img`
  width: 1rem;
  height: 2rem;
`;
const emojiList = [emoji1, emoji2, emoji3, emoji4, emoji5];
const emojiWidth = [4.938, 4.75, 3.75, 1.438, 4.938, 4.938];
const emojiHeight = [1.125, 0.375, 0.5, 2, 2.188, 2.188];

const index = () => {
  SwiperCore.use([Navigation]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  const [activeIdx, setActiveIdx] = useState(null);
  const [letterList, setLetterList] = useState([]);
  const [swiperSetting, setSwiperSetting] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const history = useHistory();

  const fetchLetter = async () => {
    try {
      setError(false);
      setLoading(true);
      const { data } = await axios.get(
        "https://www.mezin.day:3000/api/v1/letters"
      );
      setCount(data.count);
      var temp = [];
      for (let i = 0; i < data.count; i += 9) {
        temp.push(data.data.slice(i, i + 9));
      }
      setLetterList(temp);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLetter();
  }, []);

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
      <SwiperContainer>
        <NavigationButton ref={prevRef}>
          <SwiperButtonImage src={prev} width={8} height={15} alt="prev" />
        </NavigationButton>
        {swiperSetting && (
          <Swiper {...swiperSetting}>
            {letterList.map((arr, id1) => (
              <SwiperSlide key={id1}>
                <PreviewContainer>
                  {arr.map(({ emoji, name, id }) => (
                    <Circle
                      key={id}
                      idx={id} // idx: 버튼 id 지정
                      activeIdx={activeIdx} // activeIdx: 현재 클릭된 버튼의 id
                      // 메진이한테 보여줄 땐 주석 풀어줘야지
                      // onClick={() => {
                      //   setActiveIdx(id);
                      //   setTimeout(() => {
                      //     history.push({
                      //       pathname: "/sub6",
                      //       state: { id: id },
                      //     });
                      //   }, 100);
                      // }}
                    >
                      {emoji < 5 ? (
                        <Emoji index={emoji} src={emojiList[emoji]} />
                      ) : null}
                      <Name>{name}</Name>
                    </Circle>
                  ))}
                </PreviewContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <NavigationButton ref={nextRef}>
          <SwiperButtonImage src={next} alt="next" />
        </NavigationButton>
      </SwiperContainer>
    </>
  );
};
export default index;
