import React, { useEffect } from "react";
import LoginInput from "./LoginInput";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-7">
      {/* Titulo */}
      <div className="text-center leading-none">
        <h2 className="uppercase font-title text-primary-100  text-title-mobile md:text-title dark:text-zinc-100">
          Secreto
        </h2>
        <p className="italic font-subtitle font-medium dark:text-zinc-300">Ingresa la clave secreta para acceder 🪐</p>
      </div>

    <LoginInput />
    </div>
  );
};

export default Login;
