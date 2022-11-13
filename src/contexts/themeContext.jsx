import { createContext } from "react";

const themeContext = createContext({
  isDarkTheme: false,
  isAuth: false
})

export default themeContext;