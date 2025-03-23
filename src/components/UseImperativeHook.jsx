import React, { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeHook = () => {
  const inputRef = useRef(null);
  return (
    <>
      <div>UseImperativeHook</div>
      <button onClick={() => inputRef.current()}>On Focus</button>
      <ChildComponent ref={inputRef} />
    </>
  );
};

const ChildComponent = forwardRef((prop, ref) => {
  const childRef = useRef(null);
  const focus = () => {
    childRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return focus;
  });
  return (
    <>
      <input type="text" ref={childRef} />
    </>
  );
});

export default UseImperativeHook;
