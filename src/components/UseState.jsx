// import React, { useState } from "react";

const UseState = () => {
  // const [count, setCount] = useState(0)
  // const [value, setValue] = useState("")
  // const [one, setOne] = useState({
  //   Firstname: "",
  //   email: "",
  // });

  // const increment = () => {
  //   setCount(count + 1)
  // }

  // const decrement = () => {
  //   if(count<=0) return 0
  //   setCount(count - 1)
  // }

  // const handleSubmit=(e)=> {
  //   const { name, value } = e.target;
  //   setOne({ ...one, [name]: value });
  //   // setOne(prevState => ({...prevState, [name]: e.target.value}))
  // }

  return (
    <div>
      {/* <h1>Counter app useState Hook</h1> */}
      {/* <button onClick={increment}>Increment</button> */}
      {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
      {/* <p>{count}</p> */}
      {/* <button onClick={decrement}>Decrement</button> */}
      {/* <button onClick={()=>setCount((prev)=>prev-1)}>Decrement</button> */}

      {/* <h1> Take input from Input Fields</h1>
      <p>New Values Entered: {value}</p>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/> */}

      {/* <h1>Form input Name,Email using single State</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(JSON.stringify(one));
        }}
      >
        <input
          type="text"
          placeholder="Name"
          name="Firstname"
          onChange={handleSubmit}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleSubmit}
        />
        <br />
        <button>Submit</button>
      </form> */}
    </div>
  );
};

export default UseState;
