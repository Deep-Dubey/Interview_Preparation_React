import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserInfo = () => {
  const [value, set, remove] = useLocalStorage("username", "Guest");
  const handleLogout = () => {
    remove();
    set("");
  };
  return (
    <>
      <div>UserInfo</div>
      <h3>{value}</h3>
      <input type="text" value={value} onChange={(e) => set(e.target.value)} />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default UserInfo;
