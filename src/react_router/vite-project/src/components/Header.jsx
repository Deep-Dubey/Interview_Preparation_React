import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
        {/* Link dosn't highlight with is clicked */}
      {/* <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link> */}

      {/* Navlink Highlight which is clicked */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/product">Products</NavLink>
    </header>
  );
};

export default Header;
