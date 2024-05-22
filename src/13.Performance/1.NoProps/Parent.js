import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setcount] = useState(0);
  console.log("PARENT RENDERING ");
  return (
    <>
      <h1>Parent</h1>
      <p>COUNT: {count}</p>
      <button
        onClick={() => {
          setcount((old) => old + 1);
        }}
      >
        click me
      </button>
      <Child />
    </>
  );
}

export default Parent;
