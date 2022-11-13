import React from "react";

export const LettersItem = () => {
  return (
    <div className="bg-gray-100 dark:bg-zinc-800 mb-3 p-4 rounded-md">
      <div className="leading-tight">
        <p className="text-primary-100 font-title text-lg dark:text-zinc-100">
          Un sentimiento oculto en el cafe
        </p>
        <p className="text-[0.7rem] font-bold text-gray-400 dark:text-zinc-500">12/05/2022</p>
        <br />
        <p className="font-serif dark:text-zinc-100">Me gusta el cafe, suelo tomarlo por la noche y algo curioso es que cuando lo tomo en la noche me recuerda a ti...</p>
      </div>
    </div>
  );
};
