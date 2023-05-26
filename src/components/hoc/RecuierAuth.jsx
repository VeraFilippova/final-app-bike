import {  Navigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from '../context/context';


const RecuierAuth = ({children}) =>{
  const { isAuth } = useContext(AuthContext);



if (!isAuth){
  return <Navigate to="/formauth" ></Navigate>
}
  return children;
}

export {RecuierAuth};