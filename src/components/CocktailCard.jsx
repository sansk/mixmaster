import { Link } from "react-router-dom";
import CocktailCardStyles from "../styled-wrappers/CocktailCard";

export const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <CocktailCardStyles>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          detail
        </Link>
      </div>
    </CocktailCardStyles>
  );
};
