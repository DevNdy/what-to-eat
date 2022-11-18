import React from "react";
import styled from "styled-components";
import { ingredientsList, IngredientsProps } from "../../data/dataIngredients";

const Fridge = () => {
  return (
    <FridgeStyled>
      <h2>- Divers ingrédients -</h2>
      <div className="ingredientsList">
        {ingredientsList.map((e: IngredientsProps) => (
          <div key={e.id} className="ingredient">
            <img src={e.img} alt="ingredient" />
            <p>{e.name}</p>
          </div>
        ))}
      </div>
    </FridgeStyled>
  );
};

const FridgeStyled = styled.div`
  height: 600px;
  width: 600px;
  margin-left: 50px;
  border: 0.5px solid gray;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #7e7e7e;
  }

  .ingredientsList {
    height: 550px;
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .ingredient {
      margin-left: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      img {
        height: 50px;
        transition: 0.5s;
        &:hover {
          transform: scale(1.1);
        }
      }
      p {
        margin: 0;
        font-size: 12px;
      }
    }
  }
`;

export default Fridge;
