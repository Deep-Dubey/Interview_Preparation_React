import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const DebounceInput = () => {
  const [inputText, setInputText] = useState("");
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const debounceValue = useDebounce(inputText, 1000, () => {
    console.log("Debounced value:", inputText);
  });
  return (
    <>
      <div>DebounceInput</div>
      <p>Input Values: {debounceValue}</p>
      <input type="text" value={inputText} onChange={handleInputChange} />
    </>
  );
};

export default DebounceInput;
