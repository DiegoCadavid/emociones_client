import React from "react";

const ImagesItem = ({ url, info, createAt }) => {
  return (
    <div className="bg-gray-200 dark:bg-zinc-700 w-full aspect-square rounded-lg relative overflow-hidden group">
      <div className="opacity-0 group-hover:opacity-100 flex  absolute inset-0 flex-col justify-end transition-opacity ease-in">
        <div className="m-5 z-20 flex items-end font-serif">
          <p className="text-white  leading-tight">{info}</p>
          <p className="text-white text-[0.6rem]">{ createAt } </p>
        </div>

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent z-10">
          {" "}
        </div>
      </div>
      <img
        src={url}
        alt="image item"
        className="object-cover group-hover:object-contain object-center w-full h-full transition-all"
      />
    </div>
  );
};

export default ImagesItem;
