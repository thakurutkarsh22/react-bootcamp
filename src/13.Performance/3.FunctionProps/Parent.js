import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setcount] = useState(0);
  console.log("PARENT RENDERING ");

  const arr = useMemo(() => [1, 2, 3, 4], []); // abc@123, abd@111

  const memoizzedSum = useCallback(() => {
    console.log("sum");
  }, []);
  return (
    <>
      <h1>Parent 3 </h1>
      <p>COUNT: {count}</p>
      <button
        onClick={() => {
          setcount((old) => old + 1);
        }}
      >
        click me
      </button>
      <Child arr={arr} sum={memoizzedSum} />
    </>
  );
}

export default Parent;
