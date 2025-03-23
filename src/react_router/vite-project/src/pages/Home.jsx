import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="header">
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/signup"}>Signup</NavLink>
      <Outlet />
    </div>
  );
};

export default Home;
