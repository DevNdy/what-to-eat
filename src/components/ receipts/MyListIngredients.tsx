import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";
import { IngredientsProps } from "../../data/dataIngredients";

const MyListIngredients = () => {
  const { ingredientsSelected, setIngredientsSelected } = useContext(AppContext);

  function handleClickDeleteItem(id: any) {
    const copyList = [...ingredientsSelected];
    const listIngredientsUpdate = copyList.filter((f: any) => f.id !== id);
    setIngredientsSelected(listIngredientsUpdate);
  }

  return (
    <MyListIngredientsStyled>
      <h2>Mes choix d'ingrédients:</h2>
      <div className="divList">
        {ingredientsSelected
          .filter((f: IngredientsProps) => f.name === f.name)
          .map((e: IngredientsProps, i: any) => (
            <div key={i} onClick={() => handleClickDeleteItem(e.id)}>
              <img src={e.img} alt="ingredients" />
              <i className="fa-solid fa-x"></i>
            </div>
          ))}
      </div>
    </MyListIngredientsStyled>
  );
};

const MyListIngredientsStyled = styled.div`
  margin: 20px;
  h2 {
    color: ${theme.colors.title};
    font-size: 20px;
  }

  .divList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div {
      img {
        height: 40px;
        margin: 22px;
      }

      i {
        position: relative;
        top: -50px;
        left: -20px;
        background-color: black;
        color: white;
        border-radius: 50%;
        padding: 3px;
        font-size: 8px;
        text-align: center;
        height: 9px;
        width: 9px;
        cursor: pointer;
      }
    }
  }
`;

export default MyListIngredients;
