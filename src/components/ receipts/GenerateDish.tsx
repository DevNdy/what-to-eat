import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";
import { receipts } from "../../data/receiptsData";
import { handleClickGenerateDish } from "../../data/functionIA";

const GenerateDish = () => {
  const { ingredientsSelected } = useContext(AppContext);
  const [responseDish, setResponseDish] = useState("");

  return (
    <GenerateDishStyled
      onClick={() => handleClickGenerateDish(ingredientsSelected, setResponseDish)}
    >
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
