import { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [data, setData] = useState(0);
  const ref = useRef(0);
  const inputRef = useRef(null);
  console.log(inputRef.current);
  const textRef = useRef(null);
  useEffect(() => {
    textRef.current.focus();
  }, []);
  return (
    <>
      <h1>Use Ref Hook</h1>
      <p>Ref Values: {ref.current}</p>
      <button onClick={() => (ref.current += 1)}>Increment</button>
      <p>State Values: {data}</p>
      <button onClick={() => setData(data + 1)}>Increment</button>
      <br />
      <h1> Using Useref we can access dom elements</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
          inputRef.current.value = 5;
        }}
      >
        Focus
      </button>
      <br />
      <h1>Using useref when browser refresh text field should have focus</h1>
      <input type="text" ref={textRef} />
    </>
  );
};

export default UseRefHook;
