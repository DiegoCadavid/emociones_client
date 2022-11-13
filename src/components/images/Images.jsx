import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../placeholders/Title";
import getImages from "./getImages";
import ImagesContainer from "./ImagesContainer";
import ImagesMenu from "./ImagesMenu";
import { ImagesUploadModal } from "./ImagesUploadModal";

// Funcion para obtener las imagenes
export const loader = async () => {
  const images = await getImages();
  return { images };
};

// Componente
const Images = () => {
  const { images } = useLoaderData();
  const [showUploadModal, setShowUploadModal] = useState(false);

  const handleOpenModal = () => {
    setShowUploadModal(true);
  };

  const handleCloseModal = () => {
    setShowUploadModal(false);
  };

  return (
    <div className="container mx-auto py-12">
      {/* Upload modal */}
      {showUploadModal && <ImagesUploadModal handleCloseModal={handleCloseModal}/>}

      <Title
        title="Imagenes"
        subtitle={
          " Aqui tendras todas las imagenes que quiero que veas \n algun dia, ya sea dibujos que hice o fotos de mi dia \n (Tu tambien puedes subir imagenes ^^)"
        }
      />
      <ImagesMenu handleOpenModal={handleOpenModal} />
      {images.length ? (
        <ImagesContainer images={images} />
      ) : (
        <>
          <p className="text-center text-primary-100 mt-2 font-subtitle italic">
            Por ahora no hay imagenes U_U
          </p>
        </>
      )}
    </div>
  );
};

export default Images;
