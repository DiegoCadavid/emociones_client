import React, { useEffect } from "react";

const NoScroll = () => {
  useEffect(() => {
    document.body.classList.add("noscroll");
    window.scrollTo(0,0);

    return () => {
      document.body.classList.remove("noscroll");
    };
  }, []);

  return null;
};

export default NoScroll;
