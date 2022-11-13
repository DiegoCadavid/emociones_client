import React from "react";

const LettersMenu = ({ handleOpenModal }) => {
  return (
    <div className="flex justify-between mt-16">
      <button className="btn">Filtros</button>
      <button className="btn" onClick={() => { handleOpenModal() }}>Escribir</button>
    </div>
  );
};

export default LettersMenu;
