import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./pages";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "cocktail", element: <Cocktail /> },

      { path: "newsletter", element: <Newsletter /> },

      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={browserRouter} />;
};
export default App;
