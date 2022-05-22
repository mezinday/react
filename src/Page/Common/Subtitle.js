import React from "react";
import styled from "styled-components";
import "../../static/fonts/font.css";

const Text = styled.div`
  height: 2rem;
  font-family: Montserrat_SemiBold;
  font-size: 0.688rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.55px;
  text-align: left;
  color: #000;
  display: flex;
  align-items: flex-end;
`;
const Subtitle = ({ title }) => {
  return <Text>{title}</Text>;
};
export default Subtitle;
