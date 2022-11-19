import { receipts } from "./receiptsData";

export function handleClickGenerateDish(ingredientsSelect: string[], setter: any) {
  const copyIngredients = [...ingredientsSelect];
  const filterNameIngredients = copyIngredients.map((e: any) => e.name).sort();

  // one ingredient:
  if (filterNameIngredients[0] === "Oeuf" && filterNameIngredients.length < 2) {
    setter(receipts.oeuf);
  } else if (filterNameIngredients[0] === "Pomme de terre" && filterNameIngredients.length < 2) {
    setter(receipts.pommeDeTerre);
  }
  //----------------------------
  // null or many:
  else if (filterNameIngredients.length < 1) {
    setter(receipts.null);
  } else if (filterNameIngredients.length > 8) {
    setter(receipts.unavailable);
  }
  //----------------------------
  // two ingredients:
  else if (
    filterNameIngredients[1] === "Oeuf" &&
    filterNameIngredients[0] === "Champignon" &&
    filterNameIngredients.length < 3
  ) {
    setter(receipts.oeufChamp);
  } else if (
    filterNameIngredients[0] === "Salade" &&
    filterNameIngredients[1] === "Tomate" &&
    filterNameIngredients.length < 3
  ) {
    setter(receipts.saladeTomate);
  } else if (
    filterNameIngredients[0] === "Salade" ||
    (filterNameIngredients[0] === "Tomate" && filterNameIngredients.length < 2)
  ) {
    setter(receipts.saladeOrTomate);
  }
  //----------------------------
  // three ingredients:
  else if (
    filterNameIngredients[0] === "Bacon" &&
    filterNameIngredients[1] === "Salade" &&
    filterNameIngredients[2] === "Tomate" &&
    filterNameIngredients.length < 4
  ) {
    setter(receipts.baconSaladeTomate);
  }
  //----------------------------
  // four ingredients
  else if (
    filterNameIngredients[0] === "Bacon" &&
    filterNameIngredients[1] === "Oeuf" &&
    filterNameIngredients[2] === "Salade" &&
    filterNameIngredients[3] === "Tomate" &&
    filterNameIngredients.length < 5
  ) {
    setter(receipts.baconSaladeTomateOeuf);
  }
  //----------------------------
  // five ingredients:
  else if (
    filterNameIngredients[0] === "Bacon" &&
    filterNameIngredients[1] === "Champignon" &&
    filterNameIngredients[2] === "Oeuf" &&
    filterNameIngredients[3] === "Salade" &&
    filterNameIngredients[4] === "Tomate" &&
    filterNameIngredients.length < 6
  ) {
    setter(receipts.baconSaladeTomateOeufChamp);
  }
}
