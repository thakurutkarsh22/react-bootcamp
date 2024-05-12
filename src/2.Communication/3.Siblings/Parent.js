import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <h1>Parent</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Child1 childCommunicator={childCommunicatorhandler} pi={pi} />
          <Child2 brotherMarks={marksOfStudent} />
        </div>
      </div>
    </>
  );
}

export default Parent;

// A parent can communicate to child Through Props
