import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";
import { handleClickGenerateDish } from "../../data/functionIA";

const GenerateDish = () => {
  const { ingredientsSelected } = useContext(AppContext);
  const [responseDish, setResponseDish] = useState<string>("");

  return (
    <GenerateDishStyled
      onClick={() => handleClickGenerateDish(ingredientsSelected, setResponseDish)}
    >
      <button>Que puis-je préparer avec ça?</button>
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
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }

  p {
    margin: 15px;
  }

  @media (max-width: 1280px) {
    button {
      font-size: 17px;
    }
    p {
      font-size: 15px;
    }
  }
`;

export default GenerateDish;
