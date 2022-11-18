import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const MyListIngredients = () => {
  return (
    <MyListIngredientsStyled>
      <h2>Mes choix d'ingrédients:</h2>
    </MyListIngredientsStyled>
  );
};

const MyListIngredientsStyled = styled.div`
  margin: 20px;
  h2 {
    color: ${theme.colors.title};
    font-size: 20px;
  }
`;

export default MyListIngredients;
