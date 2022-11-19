import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import GenerateDish from "./GenerateDish";
import MyListIngredients from "./MyListIngredients";

const SectionReceipts = () => {
  return (
    <SectionReceiptsStyled>
      <MyListIngredients />
      <GenerateDish />
    </SectionReceiptsStyled>
  );
};

const SectionReceiptsStyled = styled.div`
  height: 600px;
  width: 550px;
  background-color: #f6f6f6;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1280px) {
    height: 500px;
    width: 400px;
  }

  @media (max-width: 1030px) {
    margin: 20px 0 60px 0;
    height: 490px;
    width: 340px;
  }
`;

export default SectionReceipts;
