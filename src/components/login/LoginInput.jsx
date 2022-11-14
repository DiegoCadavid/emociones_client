import React, { useContext } from "react";
import authContext from "../../contexts/authContext";

const LoginInput = () => {
  const { login } = useContext(authContext);

  return (
    <div>
      <form className="flex gap-2">
        <input
          type="text"
          placeholder="####"
          className="brd bg-transparent py-2 px-4 outline-none text-center font-title placeholder:text-primary-50 text-primary-100  dark:text-zinc-100 dark:placeholder:text-zinc-400"
        />
        <button
          type="button"
          className="btn"
          onClick={() => {
            login();
          }}>
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginInput;
