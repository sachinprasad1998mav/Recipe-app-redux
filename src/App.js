import HomePage from "./components/HomePage";
import Recipe from "./components/Recipe";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/recipe/:foodId",
    element: <Recipe />,
  },
]);

export default appRouter;
