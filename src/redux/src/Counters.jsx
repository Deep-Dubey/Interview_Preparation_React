import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slice/counterSlics";

const Counters = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} style={{ margin: "0 10px" }}>
        Decrement
      </button>
    </div>
  );
};

export default Counters;
