import React from "react";
import { useLoaderData } from "react-router-dom";

import getLetters from "./getLetters";
import Title from "../placeholders/Title";
import { LettersContainer } from "./LettersContainer";
import LettersMenu from "./LettersMenu";

// Funcion para obtener las cartas
export const loader = async () => {
  const letters = await getLetters();
  return { letters };
};

const Letters = () => {
  const { letters } = useLoaderData();

  return (
    <div className="container mx-auto py-12">
      <Title
        title="Cartas"
        subtitle={
          "Muchas de mis emociones que senti/siento por ti se convierten en palabras \n que se perdieron en el tiempo, quiero evitar ello y por eso cree existe esta seccion \n que se basa en la recopilacion de esas palabras. \n (tu tambien podras escribirme ^^)"
        }
      />

      <p className="text-center mt-5 font-title font-bold text-primary-100 dark:text-zinc-100">Proximanente (en desarollo) </p>

      {/* <LettersMenu />
      <LettersContainer /> */}
    </div>
  );
};

export default Letters;
