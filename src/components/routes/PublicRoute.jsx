import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import authContext from "../../contexts/authContext";

const PublicRoute = ({ element = <></> }) => {

  const authCtx = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(authCtx.isAuth){
      navigate('/home');
    }
  }, [])
  

  if(!authCtx.isAuth){
    return element
  }

  return null;
};

export default PublicRoute;
