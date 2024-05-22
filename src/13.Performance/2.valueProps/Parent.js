import { useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setcount] = useState(0);
  console.log("PARENT RENDERING ");

  const arr = useMemo(() => [1, 2, 3, 4], []); // abc@123, abd@111
  // const arr = [1,23,4]
  return (
    <>
      <h1>Parent 2 </h1>
      <p>COUNT: {count}</p>
      <button
        onClick={() => {
          setcount((old) => old + 1);
        }}
      >
        click me
      </button>
      <Child arr={arr} />
    </>
  );
}

export default Parent;

// useMemo - memoise
