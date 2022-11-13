import React, { useContext, useEffect } from "react";

import { useNavigate } from 'react-router-dom'
import authContext from "../../contexts/authContext";

const PrivateRoute = ({ element = <></> }) => {
  const authCtx = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!authCtx.isAuth) {
      navigate('/login');
    }
  }, [])
  

  if(!authCtx.isAuth){
    return null
  }

  return element;
};

export default PrivateRoute;
