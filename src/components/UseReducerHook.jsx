import React, { useReducer } from "react";

const UseReducerHook = () => {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        if (state.count <= 0) {
          return state;
        }
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };

  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </>
  );
};

export default UseReducerHook;
