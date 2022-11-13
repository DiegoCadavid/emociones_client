import React, { useState } from "react";
import { useForm } from "react-hook-form";

import BackgroundBlur from "../placeholders/BackgroundBlur";
import NoScroll from "../placeholders/NoScroll";
import ImagesDropzone from "./ImagesDropzone";

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
      <div className="absolute inset-0 z-50 flex items-center justify-center">
        <div className="relative bg-zinc-100 p-5 rounded-lg border-4 border-primary-100 dark:bg-zinc-800 dark:border-zinc-100 shadow-primary dark:shadow-zinc-100">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}>
            <div>
              {errors.body && (
                <p className="text-red-500 font-semibold">Requerido*</p>
              )}
              <textarea
                placeholder="Informacion de la imagen"
                className="border-4 rounded-lg p-2 w-96 border-primary-100 outline-none resize-y shadow-primary dark:bg-zinc-800 dark:border-zinc-100 dark:shadow-zinc-100 dark:text-zinc-100"
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
      </div>
    </>
  );
};