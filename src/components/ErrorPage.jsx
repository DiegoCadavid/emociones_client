import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-title font-title text-primary-100">Oops!</h2>
      <p className="font-medium font-subtitle italic">A sucedido un error innesperado O_O</p>
      <p className="font-serif italic text-primary-100 font-bold">
        <i>{error.statusText || error.message}</i>
      </p>

      <br />
      <Link to="/home" className="text-primary-100 underline">Inicio</Link>
    </div>
  );
};

export default ErrorPage;
