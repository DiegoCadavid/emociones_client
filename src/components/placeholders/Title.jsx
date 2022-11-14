import React from "react";
import { Link } from "react-router-dom";

const Title = ({ title = "titulo", subtitle = "" }) => {
  return (
    <div className="text-center flex flex-col gap-3 items-center">
      <div>
        <h2 className="text-primary-100 font-title text-3xl uppercase dark:text-zinc-100">
          {title}
        </h2>
        <pre className="font-subtitle italic leading-tight mt-1 dark:text-zinc-300">
          {subtitle}
        </pre>
      </div>
      <Link to="/home" className="btn w-fit">
        inicio
      </Link>
    </div>
  );
};

export default Title;
