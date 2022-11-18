import React from "react";
import styled from "styled-components";

const Fridge = () => {
  return (
    <FridgeStyled>
      <h2>- Divers ingrédients -</h2>
    </FridgeStyled>
  );
};

const FridgeStyled = styled.div`
  height: 600px;
  width: 600px;
  margin-left: 50px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Fridge;
