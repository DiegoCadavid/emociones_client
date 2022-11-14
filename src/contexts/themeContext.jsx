import { createContext } from "react";

const themeContext = createContext({
  isDarkTheme: false,
});

export default themeContext;
