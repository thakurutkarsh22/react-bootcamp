import { useState } from "react";

function expensiveCalculation() {
  // this calculation takes time. // 5sec
  console.log("expensiveCalculation working");
  return 1000000000;
}

function CounterComponent(props) {
  console.log("component re-rendering");

  //   let score = 0; // JS VARIABLE
  //   let score1 = 0; // JS VARIABLE
  //   let score3 = 0; // JS VARIABLE
  //   it cant re-run the function.

  //   DEFAULT state 0

  const [score, setScore] = useState(0); // State Variable

  //   LAZY INITIALIZATION: this function expensiveCalculation will work only 1 time (initially )
  //   and it will not work in future re-renderings
  const [sunWeight, setSunWeight] = useState(() => {
    return expensiveCalculation();
  });

  //   const [sunWeight, setSunWeight] = useState(expensiveCalculation());

  // setScore GUrantees 2 things
  // 1. Update in score.
  // 2. Re-render (Re-run) the CounterComponent.

  function minusClickHandler() {
    // score--;
    // setScore(score - 5);
    // console.log(score, "decrement");

    // THIS WILL NOT WORK || NEVER DO THIS. IF your new state is dependent on OLD state.
    /*
    setScore(score - 1);
    setScore(score - 1);
    setScore(score - 1);
    setScore(score - 1);
    setScore(score - 1);
    */

    // THIS WILL WORK
    // ****** If my Latest STATE is Dependent on OLD STATE. *****8
    // ******** old is a Gurantee that score is old Score *******
    /*
    setScore((old) => old - 1); // -1
    setScore((old) => old - 1); // -2
    setScore((old) => old - 1); // -3
    setScore((old) => old - 1);
    setScore((old) => old - 1);
    */
    if (score < 1) {
      return;
    }
    setScore((oldState) => oldState - 1);
  }

  return (
    <>
      <h1>Counter component</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div>{score}</div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => {
              // score++;
              //   setScore(score + 1);
              // console.log(score, "increment");

              setScore((old) => old + 1);
            }}
          >
            +
          </button>
          <button onClick={minusClickHandler}>-</button>
          <button
            onClick={() => {
              setScore(0);
            }}
          >
            RESET
          </button>
        </div>

        <div>
          <h1>Sun weight</h1>
          <p>{sunWeight}</p>
        </div>
      </div>
    </>
  );
}

export default CounterComponent;

// NOTE:
/**
 * When we run the CounterComponent function then ONLY we are going to see the latest UI.
 */
