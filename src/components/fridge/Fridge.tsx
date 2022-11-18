import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { ingredientsList, IngredientsProps } from "../../data/dataIngredients";
import { theme } from "../../theme/theme";

const Fridge = () => {
  const { ingredientsSelected, setIngredientsSelected } = useContext(AppContext);

  function handleClickSelectIngredients(name: string, id: number, nbr: number, img: string) {
    const ingredientsCopy = [...ingredientsSelected];

    function upsert(array: any, element: any) {
      // (1)
      const i = array.findIndex((_element: any) => _element.id === element.id);
      if (i > -1) array[i] = element; // (2)
      else array.push(element);
    }

    upsert(ingredientsCopy, { name: name, id: id, nbr: nbr, img: img });

    setIngredientsSelected(ingredientsCopy);
  }

  return (
    <FridgeStyled>
      <h2>- Divers ingrédients -</h2>
      <div className="ingredientsList">
        {ingredientsList.map((e: IngredientsProps) => (
          <div
            key={e.id}
            className="ingredient"
            onClick={() => handleClickSelectIngredients(e.name, e.id, e.nbr, e.img)}
          >
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
    color: ${theme.colors.title};
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
