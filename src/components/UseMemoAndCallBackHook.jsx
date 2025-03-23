import React, { useCallback, useMemo, useState } from "react";

const UseMemoAndCallBackHook = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);
  const [count3, setCount3] = useState(0);

  const squareValue = useMemo(() => {
    console.log("Expensive Calculation");
    return count * count;
  }, [count]);

  const squareValues = useCallback(() => {
    console.log("Expensive Calculation");
    return count3 * count3;
  }, [count3]);
  return (
    <div>
      <h1>UseMemoAndCallBackHook</h1>
      <p>Count: {squareValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <p>Count: {count2}</p>
      <button onClick={() => setCount2(count2 - 1)}>Decrement</button>
      <h1>Use Callback</h1>
      <p>Count: {squareValues()}</p>
      <button onClick={() => setCount3(count3 + 1)}>Increment</button>
      <br />
    </div>
  );
};

export default UseMemoAndCallBackHook;

// UseMemo hook dont allow re-render but useState when updated allow whole component to re-render
// UseMemo return us a memoize Value
// UseCallback return a memoize function
