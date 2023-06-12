import CocktailListStyles from "../styled-wrappers/CocktailList";
import { CocktailCard } from "./CocktailCard";

export const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No Matching Cocktails Found!</h4>
    );
  }

  return (
    <CocktailListStyles>
      {drinks.map((item) => {
        return (
          <CocktailCard
            key={item.idDrink}
            id={item.idDrink}
            name={item.strDrink}
            image={item.strDrinkThumb}
            info={item.strAlcoholic}
            glass={item.strGlass}
          />
        );
      })}
    </CocktailListStyles>
  );
};
