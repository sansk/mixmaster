import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";
import { landingLoader } from "./pages/Landing.pages";
import { singleCocktailLoader } from "./pages/Cocktail.pages";
import { action as newsletterAction } from "./pages/Newsletter.pages";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: "cocktail/:id",
        loader: singleCocktailLoader,
        errorElement: <SinglePageError />,
        element: <Cocktail />,
      },

      { path: "newsletter", element: <Newsletter />, action: newsletterAction },

      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={browserRouter} />;
};
export default App;
