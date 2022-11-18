import tomate from "../assets/ingredients/tomate.png";
import bacon from "../assets/ingredients/bacon.png";
import biftecks from "../assets/ingredients/biftecks.png";
import boulette from "../assets/ingredients/boulette-de-viande.png";
import carotte from "../assets/ingredients/carotte.png";
import champignon from "../assets/ingredients/champignon.png";
import chocolat from "../assets/ingredients/chocolat.png";
import farine from "../assets/ingredients/farine.png";
import lait from "../assets/ingredients/lait.png";
import oeuf from "../assets/ingredients/oeuf.png";
import pate from "../assets/ingredients/pate.png";
import poisson from "../assets/ingredients/poisson.png";
import patate from "../assets/ingredients/pomme-de-terre.png";
import salade from "../assets/ingredients/salade.png";
import fromage from "../assets/ingredients/fromage.png";

export interface IngredientsProps {
  name: string;
  img: string;
  id: number;
  nbr: number;
}

export const ingredientsList = [
  {
    name: "Tomate",
    img: tomate,
    id: 0,
    nbr: 0,
  },
  {
    name: "Bacon",
    img: bacon,
    id: 0,
    nbr: 0,
  },
  {
    name: "Bifteck",
    img: biftecks,
    id: 0,
    nbr: 0,
  },
  {
    name: "Boulette de viande",
    img: boulette,
    id: 0,
    nbr: 0,
  },
  {
    name: "Carotte",
    img: carotte,
    id: 0,
    nbr: 0,
  },
  {
    name: "Champignon",
    img: champignon,
    id: 0,
    nbr: 0,
  },
  {
    name: "Chocolat",
    img: chocolat,
    id: 0,
    nbr: 0,
  },
  {
    name: "Farine de blé",
    img: farine,
    id: 0,
    nbr: 0,
  },
  {
    name: "Fromage",
    img: fromage,
    id: 0,
    nbr: 0,
  },
  {
    name: "Lait",
    img: lait,
    id: 0,
    nbr: 0,
  },
  {
    name: "Oeuf",
    img: oeuf,
    id: 0,
    nbr: 0,
  },
  {
    name: "Pâte",
    img: pate,
    id: 0,
    nbr: 0,
  },
  {
    name: "Poisson",
    img: poisson,
    id: 0,
    nbr: 0,
  },
  {
    name: "Pomme de terre",
    img: patate,
    id: 0,
    nbr: 0,
  },
  {
    name: "Salade",
    img: salade,
    id: 0,
    nbr: 0,
  },
];
