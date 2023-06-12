import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import CocktailPageStyles from "../styled-wrappers/CocktailPage";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i";

export const singleCocktailLoader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}=${id}`);

  return { id, data };
};

export const Cocktail = () => {
  const { id, data } = useLoaderData();

  if (!data)
    return (
      <h2>
        Data not there... <br /> Something went wrong!
      </h2>
    );

  const drink = data.drinks[0];

  const validIngredients = Object.keys(drink)
    .filter((key) => key.startsWith("strIngredient") && drink[key] !== null)
    .map((key) => drink[key])
    .join(", ");

  return (
    <CocktailPageStyles>
      <header>
        <Link to="/" className="btn">
          Back home
        </Link>
      </header>
      <div className="drink">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {drink.strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span> {drink.strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span> {drink.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span> {drink.strGlass}
          </p>
          <p>
            <span className="drink-data">Ingredients :</span> {validIngredients}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {drink.strInstructions}
          </p>
        </div>
      </div>
    </CocktailPageStyles>
  );
};
