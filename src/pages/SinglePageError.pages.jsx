import ErrorStyles from "../styled-wrappers/ErrorPage";
import img from "../assets/not-found.svg";
import { Link, useRouteError } from "react-router-dom";

export const SinglePageError = () => {
  const errorMsg = useRouteError();

  return (
    <div>
      <h3>Something Went Wrong on this Page!</h3>
      <br />
      <h4>{errorMsg.message}</h4>
    </div>
  );
};
