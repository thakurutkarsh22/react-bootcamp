import { useEffect, useRef, useState } from "react";

function ShowPrevValueWithLatest() {
  const [counter, setCounter] = useState(0);

  const ref = useRef("-");

  // FLAVOUR 1
  useEffect(() => {
    ref.current = counter;
  });

  return (
    <>
      <h1>useRef Example 1</h1>
      <div>PREV VAL: {ref.current} </div>
      <div>LatestVAL: {counter}</div>

      <button
        onClick={() => {
          setCounter((old) => old + 1);
        }}
      >
        Click
      </button>
    </>
  );
}

export default ShowPrevValueWithLatest;

// ref = 1>
// counter = 0
