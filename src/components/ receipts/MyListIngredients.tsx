import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";
import { IngredientsProps } from "../../data/dataIngredients";

const MyListIngredients = () => {
  const { ingredientsSelected, setIngredientsSelected } = useContext(AppContext);

  return (
    <MyListIngredientsStyled>
      <h2>Mes choix d'ingrédients:</h2>
      {ingredientsSelected.map((e: IngredientsProps) => (
        <p key={e.id}>
          {e.name} <i className="fa-solid fa-x"></i> <span>{e.nbr}</span>
        </p>
      ))}
    </MyListIngredientsStyled>
  );
};

const MyListIngredientsStyled = styled.div`
  margin: 20px;
  h2 {
    color: ${theme.colors.title};
    font-size: 20px;
  }

  p {
    font-size: 18px;
    font-weight: 600;

    i {
      font-size: 8px;
      color: gray;
    }

    span {
      font-size: 15px;
      font-weight: 400;
    }
  }
`;

export default MyListIngredients;
