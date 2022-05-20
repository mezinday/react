import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Title from './Common/Title';
import Header from './Common/Header';
import Footer from './Common/Footer';
import { Context } from '../store/Store';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import '../static/fonts/font.css';
import mezin1 from '../image/mezin1.svg';
import mezin2 from '../image/mezin2.svg';
import mezin3 from '../image/mezin3.svg';
import mezin4 from '../image/mezin4.svg';
import mezin5 from '../image/mezin5.svg';

const ROOT = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
`;
const Container = styled.div`
`

const Box = styled.div`
    margin: 7rem 0 0 0.938rem;
    height: 12.25rem;
`; 
const FooterContainer = styled.div`
    margin: 3.813rem;
`;
const index = () => {
    const context = useContext(Context);
    const {setPaper} = context;
    const history = useHistory();
    const didTapNext = () => {
        history.push("/sub2");
    }

    return (
        <ROOT>
            <Container>
                <Header/>
                <Box>
                    <Title title={"SELECT"}/>
                    <Title title={"THE"}/>
                    <Title title={"PAPER."}/>
                </Box>
                <Swiper
                    slidesPerView={1}
                    style={{width: "22.5rem",
                        height: "17.563rem",
                        margin: "5.125rem 0.938rem 0rem"
                    }}
                >
                    <SwiperSlide><img src={mezin1}/></SwiperSlide>
                    <SwiperSlide><img src={mezin2}/></SwiperSlide>
                    <SwiperSlide><img src={mezin3}/></SwiperSlide>
                    <SwiperSlide><img src={mezin4}/></SwiperSlide>
                    <SwiperSlide><img src={mezin5}/></SwiperSlide>
                </Swiper>
                <FooterContainer>
                    <Footer title={"NEXT"} onClick={didTapNext}/>
                </FooterContainer>
            </Container>
        </ROOT>
    );
}
export default index;