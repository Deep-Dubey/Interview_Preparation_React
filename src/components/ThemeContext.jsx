import React, { createContext, useState } from "react";

const ThemesContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemesContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemesContext.Provider>
  );
};

export default ThemeContext;
