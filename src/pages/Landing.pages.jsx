import { useLoaderData } from "react-router-dom";
import axios from "axios";

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
  return <h1>Landing page</h1>;
};
