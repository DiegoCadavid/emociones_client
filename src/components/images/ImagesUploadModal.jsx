import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion'

import BackgroundBlur from "../placeholders/BackgroundBlur";
import NoScroll from "../placeholders/NoScroll";
import ImagesDropzone from "./ImagesDropzone";

import modalVariant from '../transition/modalVariant'

export const ImagesUploadModal = ({ handleCloseModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [fileImage, setFileImage] = useState(null);
  const [errorFileImage, setErrorFileImage] = useState("");

  const onSubmit = (data) => {
    if(!fileImage){
      return setErrorFileImage('Requerido*');
    }

    handleCloseModal();
  };

  const handleUploadImage = (file) => {
    setFileImage(file);
  };

  return (
    <>
      {/* Backgroud */}
      <BackgroundBlur />
      <NoScroll />
      <motion.div initial="initial" animate="entry" variants={modalVariant} transition={{
        duration: 0.45,
        type: "spring",
        bounce: 0.5
      }} className="absolute inset-0 z-50 flex items-center justify-center">
        <div className="relative brd p-4 pb-7">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}>
            <div>
              {errors.body && (
                <p className="text-red-500 font-semibold">Requerido*</p>
              )}
              <textarea
                placeholder="Informacion de la imagen"
                className="p-2 w-96 brd"
                {...register("body", { required: true })}></textarea>
            </div>

            <div>
              {errorFileImage && <p className="text-red-500 font-semibold"> {errorFileImage} </p>}
              <ImagesDropzone uploadFuction={handleUploadImage} />
              <p className="font-serif text-center mt-3 dark:text-zinc-100">
                {!fileImage ? "Arrastra la imagen" : fileImage.name}
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="submit"
                value="Subir imagen"
                className="btn w-full"
              />
              <button
                className="btn"
                onClick={() => {
                  handleCloseModal();
                }}>
                {" "}
                Cancelar{" "}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};
