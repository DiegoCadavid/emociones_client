import React from "react";
import HomeNav from "./HomeNav";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <div className="leading-none text-center">
        <h1 className="uppercase font-title text-title text-primary-100 dark:text-zinc-100">
          Emociones
        </h1>
        <p className="font-subtitle font-medium italic dark:text-zinc-300">
          Hecho con cariño para Satu ✨🪐
        </p>
      </div>
      <p className="text-center font-serif dark:text-zinc-100">
        Este sitio fue creado para ti Satu, te quiero y por ello quiero crear un
        lugar <br /> donde puedas relajarte cuando el mundo se sienta un poco
        dificil ^^
      </p>

      <HomeNav />
    </div>
  );
};

export default Home;
