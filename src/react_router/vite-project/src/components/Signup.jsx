import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.email.value && e.target.password.value) {
      navigate("/posts");
    }
  };
  return (
    <div>
      <div>Signup</div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter Email" />
        <br />
        <input type="password" name="password" placeholder="Enter Password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Signup;
