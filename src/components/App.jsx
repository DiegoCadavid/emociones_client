import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import authContext from "../contexts/authContext";
import themeContext from "../contexts/themeContext";
import ToggleTheme from "./ToggleTheme";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuth, setIsAuth] = useState(
    !!sessionStorage.getItem("user") || false
  );

  const toggleDarkMode = () => {
    setIsDarkMode((dark) => !dark);
  };

  // Cuando se cambie de ruta
  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/home");
    }
  }, [location.pathname]);

  // Modo oscuro
  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [isDarkMode]);

  const login = () => {
    sessionStorage.setItem("user", JSON.stringify({ role: "admin" }));
    setIsAuth(true);
    navigate("/home");
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <div className={`min-h-screen dark:bg-zinc-900 transition-colors ease-in`}>
      <ToggleTheme
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        handleLogout={logout}
      />
      <themeContext.Provider value={{
        isDarkTheme: isDarkMode
      }}>
        <authContext.Provider
          value={{
            login,
            isAuth,
          }}>
          <Outlet />
        </authContext.Provider>
      </themeContext.Provider>
    </div>
  );
};

export default App;
