import { useEffect, useState } from "react";

function UseEffectHookExplanation() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const [phase, setPhase] = useState("MOUTING PHASE");

  console.log("STAGE OF COMPONENT::: " + phase);

  // 3 FLAVOURS OF USE EFFECT

  // 1. FLAVOUR 1: no DPENEDENCY ARRAY: MOUNTING PHASE, UPDATE PHASE

  // *****  WE USE THIS VERY RARELY *********
  //    ****** NEVER INSIDE FLAVOUR 1 USE the hook useState (setData) *********

  //   useEffect(() => {
  //     console.log("IN THE USE EFFECT FLAVOUR 1");

  //     return () => {
  //       // UNMONTING PASE
  //     };
  //   });

  // 2. FLAVOUR 2: BLANK DPENEDENCY ARRAY : MOUTING PHASE

  //   useEffect(() => {
  //     console.log("IN THE USE EFFECT FLAVOUR 2");

  //     return () => {
  //       // UNMONTING PASE
  //     };
  //   }, []);

  // 3 FLAVOUR 3: Filled DEPENDENCY ARRAY: MOUTING PHASE, SELECTIVELY IN UPDATE PHASE

  //   useEffect(() => {
  //     console.log("IN THE USE EFFECT FLAVOUR 3");

  //     return () => {
  //       // CLEANUP
  //       //   clearTIMEOUTS
  //       // clearIntervals
  //       // obj = null
  //       // logging

  //       console.log("CLEANUP WORK", "unmouting phase useEffect");
  //     };
  //   }, [counter2, counter]);

  return (
    <>
      {console.log("IN THE UI")}
      <h1>USE EFFECT UNDERSTANDIN</h1>
      <p>COUNTER: 1:: {counter}</p>
      <p>COUNTER: 2:: {counter2}</p>

      <button
        onClick={() => {
          setCounter((old) => old + 1);
          setPhase("UPDATE PHASE");
        }}
      >
        + plus counter
      </button>

      <button
        onClick={() => {
          setCounter2((old) => old + 1);
          setPhase("UPDATE PHASE");
        }}
      >
        + plus counter 2
      </button>
    </>
  );
}

export default UseEffectHookExplanation;
