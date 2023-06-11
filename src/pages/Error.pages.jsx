import ErrorStyles from "../styled-wrappers/ErrorPage";
import img from "../assets/not-found.svg";
import { Link, useRouteError } from "react-router-dom";

export const Error = () => {
  const errorMsg = useRouteError();

  if (errorMsg.status === 404) {
    return (
      <ErrorStyles>
        <div>
          <img src={img} alt="404 Not Found Error!" />
          <h5>Ohh!</h5>
          <p>{errorMsg.data}</p>
          <Link to="/">Go back to Home Page!</Link>
        </div>
      </ErrorStyles>
    );
  }

  return (
    <ErrorStyles>
      <div>
        <h5>Something Went Wrong!</h5>
      </div>
    </ErrorStyles>
  );
};
