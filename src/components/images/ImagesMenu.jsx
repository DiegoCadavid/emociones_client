import React from "react";

const ImagesMenu = ({ handleOpenModal }) => {
  return (
    <div className="flex justify-end gap-3 mt-16">
      {/* <button className="btn w-full md:w-fit" disabled={true}>
        Filtros
      </button> */}

      <button
        className="btn w-full md:w-fit"
        onClick={() => {
          handleOpenModal();
        }}>
        Subir imagen
      </button>
    </div>
  );
};

export default ImagesMenu;
