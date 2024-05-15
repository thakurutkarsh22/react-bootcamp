import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <h1>Parent</h1>
      {toggle && <Child />}

      <button
        onClick={() => {
          setToggle((old) => !old);
        }}
      >
        clickl
      </button>
    </>
  );
}

export default Parent;
