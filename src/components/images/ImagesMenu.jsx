import React from "react";

const ImagesMenu = ({ handleOpenModal }) => {
  return (
    <div className="flex justify-between mt-16">
      <div className="flex items-center gap-2">
      <button className="btn" disabled={true}>Filtros</button>
      <p className="text-primary-50 dark:text-zinc-500">(Disponible proximamente)</p>
      </div>
      <button className="btn" onClick={() => { handleOpenModal() }}>Subir imagen</button>
    </div>
  );
};

export default ImagesMenu;
