import React from "react";

import { useDropzone } from "react-dropzone";

const ImagesDropzone = ({ uploadFuction }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 1,
    onDrop: (files) => uploadFuction(files[0]),
  });

  return (
    <div
      {...getRootProps({
        className:
          "border-4  w-full h-20 text-primary-100 rounded-lg border-primary-100 p-3 flex items-center justify-center shadow-primary hover:shadow-primary-min hover:translate-y-shadow-min hover:cursor-pointer active:shadow-none active:translate-y-shadow transition-all ease-in dark:border-zinc-100 dark:text-zinc-100 dark:shadow-zinc-100",
      })}>
      <input {...getInputProps()} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 stroke-2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
        />
      </svg>
    </div>
  );
};

export default ImagesDropzone;
