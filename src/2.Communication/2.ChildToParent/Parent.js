import { useState } from "react";
import Child from "./Child";

function Parent() {
  const pi = 3.14; // UNIVERSAL TRUTH

  const [marksOfStudent, setMakrs] = useState();

  if (marksOfStudent < 40) {
    console.log("scold them");
  } else {
    console.log("happy");
  }

  function childCommunicatorhandler(info, score) {
    console.log("info from child inside Parent Component", info, score);
    setMakrs(score);
  }

  return (
    <>
      <h1>Parent</h1>
      <Child childCommunicator={childCommunicatorhandler} pi={pi} />
    </>
  );
}

export default Parent;

// A parent can communicate to child Through Props
