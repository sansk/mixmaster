import { useParams } from "react-router-dom";
import { CocktailPageStyles } from "../styled-wrappers/CocktailPage";

export const Cocktail = () => {
  const idParam = useParams();
  
  return (
    <CocktailPageStyles>
      <h2>Cocktail Page</h2>;
    </CocktailPageStyles>
  );
};
