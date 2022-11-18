import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";
import { receipts } from "../../data/receiptsData";

const GenerateDish = () => {
  const { ingredientsSelected } = useContext(AppContext);
  const [responseDish, setResponseDish] = useState("");

  function handleClickGenerateDish() {
    const copyIngredients = [...ingredientsSelected];
    const filterNameIngredients = copyIngredients.map((e: any) => e.name).sort();

    if (filterNameIngredients[0] === "Oeuf" && filterNameIngredients.length < 2) {
      setResponseDish(receipts.oeuf);
    } else if (
      filterNameIngredients[1] === "Oeuf" &&
      filterNameIngredients[0] === "Champignon" &&
      filterNameIngredients.length < 3
    ) {
      setResponseDish(receipts.oeufChamp);
    }
  }

  return (
    <GenerateDishStyled onClick={handleClickGenerateDish}>
      <button>Que puis-je préparer avec mes ingredients?</button>
      <p>{responseDish}</p>
    </GenerateDishStyled>
  );
};

const GenerateDishStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    height: 25px;
    font-size: 20px;
    color: white;
    background-color: ${theme.colors.secondaryColor};
    border: none;
    cursor: pointer;
  }

  p {
    margin: 15px;
  }
`;

export default GenerateDish;
