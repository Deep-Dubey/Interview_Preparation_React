import React from "react";
import { Navigate } from "react-router-dom";

const Required = ({ children }) => {
  const loggedIn = localStorage.getItem("loggedIn");
  if (!loggedIn) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default Required;
