import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { CocktailList } from "../components/CocktailList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const landingLoader = async () => {
  const searchTerm = "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

export const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();
  console.log(drinks);
  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
};
