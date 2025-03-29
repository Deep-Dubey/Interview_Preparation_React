import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setEmail, setName } from "../slicer/formSlice";

const Form = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.form);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Redux Form</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />
      <button onClick={() => dispatch(resetForm())}>Reset</button>
    </div>
  );
};

export default Form;
