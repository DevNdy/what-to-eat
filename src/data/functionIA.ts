import { receipts } from "./receiptsData";
import { IngredientsProps } from "./dataIngredients";

export function handleClickGenerateDish(
  ingredientsSelect: IngredientsProps[],
  setter: (newSate: string) => void
) {
  const copyIngredients = [...ingredientsSelect];
  console.log(copyIngredients);

  const filterNameIngredients = copyIngredients.map((e: IngredientsProps) => e.name).sort();

  // one ingredient:
  if (filterNameIngredients[0] === "Oeuf" && filterNameIngredients.length < 2) {
    setter(receipts.oeuf);
  } else if (filterNameIngredients[0] === "Pomme de terre" && filterNameIngredients.length < 2) {
    setter(receipts.pommeDeTerre);
  } else if (filterNameIngredients[0] === "Bifteck" && filterNameIngredients.length < 2) {
    setter("Mmmmmmm, une bonne entrecôte au barbecue.");
  } else if (filterNameIngredients[0] === "Carotte" && filterNameIngredients.length < 2) {
    setter("Carotte à la vapeur ou à la poële.");
  } else if (filterNameIngredients[0] === "Bacon" && filterNameIngredients.length < 2) {
    setter("Du bacon grillé");
  } else if (
    filterNameIngredients[0] === "Boulette de viande" &&
    filterNameIngredients.length < 2
  ) {
    setter("Juste des boulettes?");
  } else if (filterNameIngredients[0] === "Champignon" && filterNameIngredients.length < 2) {
    setter("Nature");
  } else if (filterNameIngredients[0] === "Chocolat" && filterNameIngredients.length < 2) {
    setter("chiche, juste un carré pas plus. ");
  } else if (filterNameIngredients[0] === "Farine de blé" && filterNameIngredients.length < 2) {
    setter("De la farine et de l'eau, ça ne sera pas le meilleur repas de ta vie... ");
  } else if (filterNameIngredients[0] === "Fromage" && filterNameIngredients.length < 2) {
    setter("Avec du pain c'est mieu. ");
  } else if (filterNameIngredients[0] === "Lait" && filterNameIngredients.length < 2) {
    setter("Du lait chaud ou froid. ");
  } else if (filterNameIngredients[0] === "Pâte" && filterNameIngredients.length < 2) {
    setter("Nature, ne le dis pas à un italien... ");
  } else if (filterNameIngredients[0] === "Poisson" && filterNameIngredients.length < 2) {
    setter("Grillé");
  }

  //----------------------------
  // two ingredients:
  else if (
    filterNameIngredients[1] === "Oeuf" &&
    filterNameIngredients[0] === "Champignon" &&
    filterNameIngredients.length < 3
  ) {
    setter("Une omelette aux champignons, Miam Miam.");
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
    setter("Nature ou avec de la vinegrette ?");
  } else if (
    filterNameIngredients[0] === "Poisson" &&
    filterNameIngredients[1] === "Pâte" &&
    filterNameIngredients.length < 3
  ) {
    setter("Tout est dit.");
  } else if (
    filterNameIngredients[0] === "Boulette de viande" &&
    filterNameIngredients[1] === "Pâte" &&
    filterNameIngredients.length < 3
  ) {
    setter("Manquerai plus que la sauce tomate....");
  } else if (
    filterNameIngredients[0] === "Bifteck" &&
    filterNameIngredients[1] === "Pomme de terre" &&
    filterNameIngredients.length < 3
  ) {
    setter("Rien de mieu qu'un bon steack frites.");
  } else if (
    filterNameIngredients[0] === "Fromage" &&
    filterNameIngredients[1] === "Oeuf" &&
    filterNameIngredients.length < 3
  ) {
    setter("Omelette au fromage");
  } else if (
    filterNameIngredients[0] === "Bacon" &&
    filterNameIngredients[1] === "Bifteck" &&
    filterNameIngredients.length < 3
  ) {
    setter("L'un ou l'autre s'il te plaît...");
  } else if (
    filterNameIngredients[0] === "Bacon" &&
    filterNameIngredients[1] === "Tomate" &&
    filterNameIngredients.length < 3
  ) {
    setter("Tomate coupé avec un peu de sel, vinegrette et du bacon grillé, pourquoi pas.");
  } else if (
    filterNameIngredients[0] === "Champignon" &&
    filterNameIngredients[1] === "Tomate" &&
    filterNameIngredients.length < 3
  ) {
    setter("Champignon cuit avec tomate cuite ? à tester");
  } else if (
    filterNameIngredients[0] === "Fromage" &&
    filterNameIngredients[1] === "Pomme de terre" &&
    filterNameIngredients.length < 3
  ) {
    setter("Pomme de terre vapeur avec frommage fondu, tu me donnes faim.");
  } else if (
    filterNameIngredients[0] === "Bacon" &&
    filterNameIngredients[1] === "Pâte" &&
    filterNameIngredients.length < 3
  ) {
    setter("Pâte au bacon.");
  }
  //----------------------------
  // three ingredients:
  else if (
    filterNameIngredients[0] === "Bacon" &&
    filterNameIngredients[1] === "Salade" &&
    filterNameIngredients[2] === "Tomate" &&
    filterNameIngredients.length < 4
  ) {
    setter("Cette salade devient interressante...");
  } else if (
    filterNameIngredients[0] === "Carotte" &&
    filterNameIngredients[1] === "Poisson" &&
    filterNameIngredients[2] === "Pomme de terre" &&
    filterNameIngredients.length < 4
  ) {
    setter("Une soupe?");
  } else if (
    filterNameIngredients[0] === "Boulette de viande" &&
    filterNameIngredients[1] === "Pâte" &&
    filterNameIngredients[2] === "Tomate" &&
    filterNameIngredients.length < 4
  ) {
    setter("Pâte bolognaise même si tout les ingredients ne sont pas réunis");
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
    setter("Pourquoi pas une salade?...");
  } else if (
    filterNameIngredients[0] === "Bacon" &&
    filterNameIngredients[1] === "Champignon" &&
    filterNameIngredients[2] === "Salade" &&
    filterNameIngredients[3] === "Tomate" &&
    filterNameIngredients.length < 5
  ) {
    setter("Une bonne salade, surtout si on est le soir..");
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
  } else if (
    filterNameIngredients[0] === "Carotte" &&
    filterNameIngredients[1] === "Champignon" &&
    filterNameIngredients[2] === "Poisson" &&
    filterNameIngredients[3] === "Pomme de terre" &&
    filterNameIngredients[4] === "Tomate" &&
    filterNameIngredients.length < 6
  ) {
    setter("Une soupe de poisson");
  }
  //----------------------------
  // null or many:
  else if (filterNameIngredients.length < 1) {
    setter(receipts.null);
  } else if (filterNameIngredients.length > 8) {
    setter(receipts.unavailable);
  } else {
    setter("Cette composition ne m'inspire pas... Désolé");
  }
}
