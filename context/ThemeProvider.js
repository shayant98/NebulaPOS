import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (val) => {
    setIsDarkMode(val);
    localStorage.setItem("modeSwitch", val ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <ThemeUpdateContext.Provider value={toggleDarkMode}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return { isDarkMode: useContext(ThemeContext), toggleDarkMode: useContext(ThemeUpdateContext) };
};
