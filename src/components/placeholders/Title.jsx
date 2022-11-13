import React from "react";
import { Link } from 'react-router-dom'

const Title = ({ title = "titulo", subtitle = "" }) => {
  return (
    <div className="text-center">
      <h2 className="text-primary-100 font-title text-3xl uppercase dark:text-zinc-100">
        {title}
      </h2>
      <pre className="font-subtitle italic leading-tight mt-1 mb-2 dark:text-zinc-300">{subtitle}</pre>
      <Link to="/home" className="hover:underline text-primary-100 dark:text-zinc-100">inicio</Link>
    </div>
  );
};

export default Title;
