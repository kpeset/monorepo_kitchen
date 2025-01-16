import { Outlet } from "react-router-dom";
import { useDarkTheme } from "./services/DarkThemeContext";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const { darkTheme } = useDarkTheme();

  const root = document.querySelector("#root");

  if (root) {
    root.className = darkTheme ? "dark" : "light";
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
