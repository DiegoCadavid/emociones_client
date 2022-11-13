import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import getLetters from "./getLetters";
import Title from "../placeholders/Title";
import { LettersContainer } from "./LettersContainer";
import LettersMenu from "./LettersMenu";
import LettersWriteModal from "./LettersWriteModal";

// Funcion para obtener las cartas
export const loader = async () => {
  const letters = await getLetters();
  return { letters };
};

const Letters = () => {
  const { letters } = useLoaderData();
  const [showWriteModal, setShowWriteModal] = useState(false);

  const handleOpenModal = () =>{
    setShowWriteModal(true);
  }

  const handleCloseModal =() => {
    setShowWriteModal(false);
  }

  return (
    <div className="container mx-auto py-12">

      {/* Modal de creacion */}
      { showWriteModal && <LettersWriteModal handleCloseModal={handleCloseModal} />}

      <Title
        title="Cartas"
        subtitle={
          "Muchas de mis emociones que senti/siento por ti se convierten en palabras \n que se perdieron en el tiempo, quiero evitar ello y por eso cree existe esta seccion \n que se basa en la recopilacion de esas palabras. \n (tu tambien podras escribirme ^^)"
        }
      />
      <LettersMenu handleOpenModal={handleOpenModal} />
      <LettersContainer />
    </div>
  );
};

export default Letters;

