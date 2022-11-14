import React from "react";

const LettersMenu = ({ handleOpenModal }) => {
  return (
    <div className="flex justify-end gap-3 mt-16">
      {/* <button className="btn w-full md:w-fit">Filtros</button> */}
      <button className="btn w-full md:w-fit" onClick={() => { handleOpenModal() }}>Escribir</button>
    </div>
  );
};

export default LettersMenu;
