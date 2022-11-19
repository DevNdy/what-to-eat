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
`;

export default SectionReceipts;
