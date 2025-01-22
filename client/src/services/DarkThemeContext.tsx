import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Créer le context

interface DarkThemeProps {
  darkTheme: boolean;
  setDarkTheme: (darkTheme: boolean) => void;
}

interface MyContextProps {
  children: ReactNode;
}

const darkThemeContext = createContext(null as null | DarkThemeProps);

// Créer le provider

export function DarkThemeProvider({ children }: MyContextProps) {
  const [darkTheme, setDarkTheme] = useState(false as boolean);

  return (
    <darkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </darkThemeContext.Provider>
  );
}

// Créer le hook personnalisé

export const useDarkTheme = () => {
  const context = useContext(darkThemeContext);
  if (context == null) {
    throw new Error("Un context doit être utilisé");
  }

  return context;
};
