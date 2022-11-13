import React, { useContext, useEffect } from "react";
import { Link, useNavigation } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import themeContext from "../../contexts/themeContext";

const HomeNav = () => {
  const navigation = useNavigation();
  const themeCtx = useContext(themeContext);

  return (
    <div className="mt-5 flex flex-col items-center gap-4">
      {navigation.state === "idle" && (
        <>
          <div className="flex gap-3">
            <Link to="/images" className="btn">
              {" "}
              Imagenes
            </Link>
            <Link to="/letters" className="btn">
              {" "}
              Cartas{" "}
            </Link>
          </div>
          <p className="text-[0.7rem] font-medium text-gray-300 dark:text-zinc-600">
            (Se iran creando secciones con el tiempo)
          </p>
        </>
      )}

      {navigation.state === "loading" && (
        <>
          <p className="text-primary-100 font-serif animate-pulse dark:text-zinc-100">Cargando</p>
          <SyncLoader size={12} color= {themeCtx.isDarkTheme ? " rgb(209 213 219)" : "#F25C5C"} />
        </>
      )}
    </div>
  );
};

export default HomeNav;
