import React from "react";

// const data = [
//   { id: 1, name: "John", age: 25 },
//   { id: 2, name: "Jane", age: 30 },
//   { id: 3, name: "Bob", age: 35 },
//   { id: 4, name: "Deep", age: 30 },
//   { id: 5, name: "Rahul", age: 25 },
// ];

const Mapfilterreduce = () => {
  return (
    <>
      {/* Using Map */}
      {/* <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              {item.id},{item.name},{item.age}
            </li>
          );
        })}
      </ul> */}

      {/* Using Filter */}
      {/* <ul>
        {data
          .filter((item) => item.age > 30)
          .map((item) => {
            return <li key={item.id}>{item.id},{item.name},{item.age}</li>;
          })}
      </ul> */}

      {/* Reducer */}
      {/* <p>Total Age: {data.reduce((acc,item)=>{
        return acc + item.age
      },0)}</p> */}


    </>
  );
};

export default Mapfilterreduce;

// While using () then no need to return
{
  /* <>
  <ul>
    {data.map((item) => (
      <li key={item.id}>{item.id}</li>
    ))}
  </ul>
</>; */
}

// We can pass Propes from parent to child and props are imutable.