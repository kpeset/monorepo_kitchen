// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App.tsx";

import About from "./pages/About.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/Home.tsx";
import RecipeDetails from "./pages/RecipeDetails.tsx";
import Recipes from "./pages/Recipes.tsx";

// Import services
import { getAllRecipes, getRecipeDetails } from "./services/requests.ts";

// Import CSS
import "./styles/app.css";
import "./styles/header.css";
import "./styles/footer.css";

/* ************************************************************************* */

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
        loader: getAllRecipes,
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetails />,
        loader: ({ params }) => getRecipeDetails(Number(params.id)),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

/* ************************************************************************* */

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
