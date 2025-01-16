// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DarkThemeProvider } from "./services/DarkThemeContext.tsx";

/* ************************************************************************* */

// Import the main app component
import App from "./App.tsx";

import About from "./pages/About.tsx";
import Categories from "./pages/Categories.tsx";
import CategoryDetails from "./pages/CategoryDetails.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/Home.tsx";
import RecipeDetails from "./pages/RecipeDetails.tsx";
import Search from "./pages/Search.tsx";

// Import services
import {
  getCategories,
  getMealsByCategory,
  getRecipeDetails,
  searchMeal,
} from "./services/requests.ts";

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
        path: "/recipes/:id",
        element: <RecipeDetails />,
        loader: ({ params }) => getRecipeDetails(String(params.id)),
        errorElement: <ErrorPage />,
      },
      {
        path: "/categories",
        element: <Categories />,
        loader: getCategories,
      },
      {
        path: "/categories/:name",
        element: <CategoryDetails />,
        loader: ({ params }) => getMealsByCategory(String(params.name)),
      },
      {
        path: "/search/:meal",
        element: <Search />,
        loader: ({ params }) => searchMeal(String(params.meal)),
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
    <DarkThemeProvider>
      <RouterProvider router={router} />
    </DarkThemeProvider>
  </StrictMode>,
);
