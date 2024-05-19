import { useRef, useState } from "react";

function UseRefHook() {
  const [counter, setCounter] = useState(0);

  const ref = useRef(12);
  const { current } = ref;

  console.log(ref);

  function onCLickHandler() {
    // ref.current ++;
    console.log("-------- PREV VALUE ----------", ref.current);
    ref.current = ref.current + 1;
    console.log("-------- CURRENT VALUE ----------", ref.current);
  }

  return (
    <>
      <h1>Use ref hook</h1>
      <div>CURRENT VAL: {current}</div>
      <div>COUNTER: {counter}</div>
      <button onClick={onCLickHandler}>+</button>
      <br />

      <button onClick={() => setCounter((old) => old + 1)}>Coutnter++</button>
    </>
  );
}

export default UseRefHook;

/**
 * useRef -> preservation of the data (just like useState, useReducer) but without re-rendering.
 * 1. It can store Number, boolean, arrays, objects, function, JSX/HTML ELEMENTS
 *
 * preservation of the data throughout multiple re-renders
 *
 */
