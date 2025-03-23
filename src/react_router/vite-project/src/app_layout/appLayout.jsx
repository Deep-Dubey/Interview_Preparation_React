import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const appLayout = () => {
  const navigate = useNavigate();
  const isLoading = navigate.state === "Loading";
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        React Router
      </h1>
      {/* Header */}
      <Header />
      {/* Loading */}
      {isLoading && <div>Loading...</div>}
      {/* Body */}
      <Outlet />
    </div>
  );
};

export default appLayout;
