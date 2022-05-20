import React from 'react'
import styled from "styled-components";
import '../../static/fonts/font.css';

const Text = styled.div`
  font-family: Montserrat_SemiBold;
  font-size: 3.625rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.95;
  letter-spacing: -2.9px;
  text-align: left;
  color: #000;
`
const Title = ({title}) => {
    return (
        <Text>{title}</Text>
    );
}
export default Title