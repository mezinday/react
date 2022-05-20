import React from 'react'
import styled from "styled-components";
import '../../static/fonts/font.css'

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  font-family: Montserrat_SemiBold;
  font-size: 0.75rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: -0.6px;
  text-align: left;
  color: #777;
`
const Footer = ({title, onClick}) => {
    return (
      <Box>
        <Text onClick={onClick}>{title}</Text>
      </Box>
    );
}
export default Footer;