import React from 'react'
import styled from "styled-components";
import "../../static/fonts/font.css";

const Header1 = styled.marquee`
  font-family: Montserrat_Medium;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.75px;
  text-align: left;
  color: #000;
  width: 24.3125rem;
`
const Vector = styled.div`
  width: 24.3125rem;
  height: 1px;
  border: solid 1px #000;
`


const Header = () => {
  return (
    <>
        <Header1>THESE LETTERS WILL BE DELIVERED TO MEZIN ON 5/27. SEND LOVE TO MEZIN! DON’T CRY MEZIN!!</Header1>
        <Vector/>
    </>
  )
}

export default Header