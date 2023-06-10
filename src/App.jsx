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
  { path: "/", element: <HomeLayout /> },
  { path: "/about", element: <About /> },
]);

const App = () => {
  return <RouterProvider router={browserRouter} />;
};
export default App;
