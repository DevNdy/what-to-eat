import React from "react";
import styled from "styled-components";
import MyListIngredients from "./MyListIngredients";

const SectionReceipts = () => {
  return (
    <SectionReceiptsStyled>
      <MyListIngredients />
    </SectionReceiptsStyled>
  );
};

const SectionReceiptsStyled = styled.div`
  height: 600px;
  width: 550px;
  background-color: #f6f5f5;
`;

export default SectionReceipts;
