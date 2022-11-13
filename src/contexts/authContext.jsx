import { createContext } from "react";
const authContext = createContext({
  isAuth: false,
  role: "",
  login: () => {}
})
export default authContext;