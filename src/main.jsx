import React  from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import "./index.css";

// Tipos de rutas
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";

// Rutas
import ErrorPage from "./components/ErrorPage";
import App from "./components/App";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Images, { loader as imagesLoader } from "./components/images/Images";
import Letters, { loader as lettersLoader } from './components/letters/Letters';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <PublicRoute element={<Login />} />,
      },
      {
        path: "home",
        element: <PrivateRoute element={<Home />} />,
      },
      {
        path: "images",
        element: <PrivateRoute element={<Images />} />,
        loader: imagesLoader,   
      },
      {
        path: "letters",
        element: <PrivateRoute  element={<Letters /> }/>,
        loader: lettersLoader
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
