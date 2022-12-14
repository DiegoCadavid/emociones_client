import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import modalVariant from "../transition/modalVariant";
import BackgroundBlur from "../placeholders/BackgroundBlur";
import NoScroll from "../placeholders/NoScroll";

const LettersWriteModal = ({ handleCloseModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleCloseModal();
  };

  return (
    <>
      <BackgroundBlur />
      <NoScroll />
      <motion.div
        initial="initial"
        animate="entry"
        variants={modalVariant}
        transition={{
          duration: 0.45,
          type: "spring",
          bounce: 0.5,
        }}
        className="absolute inset-0 p-5 flex justify-center items-center z-50">
        <div className="brd w-full md:w-96 p-5">
          <form
            className="w-full  flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}>
            <div>
              {errors.title && (
                <p className="text-red-500 font-semibold">Requerido*</p>
              )}
              <input
                type="text"
                className="brd p-1 outline-none w-full"
                placeholder="Titulo"
                {...register("title", {
                  required: true,
                })}
              />
            </div>
            <div>
              {errors.content && (
                <p className="text-red-500 font-semibold">Requerido*</p>
              )}
              <textarea
                className="brd w-full p-1 resize-y outline-none"
                placeholder="Contenido"
                {...register("content", {
                  required: true,
                })}
              />
            </div>
            <div className="flex gap-2">
              <input type="submit" value="Escribir" className="btn w-full" />
              <button
                className="btn"
                type="button"
                onClick={() => {
                  handleCloseModal();
                }}>
                Cancelar{" "}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default LettersWriteModal;
