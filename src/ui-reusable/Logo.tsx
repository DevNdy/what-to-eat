import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <LogoStyled>What to eat?</LogoStyled>;
};

const LogoStyled = styled.h3`
  font-family: "Montez", cursive;
  font-size: 55px;
  text-decoration: underline 3px;
  margin: 50px;
`;

export default Logo;
